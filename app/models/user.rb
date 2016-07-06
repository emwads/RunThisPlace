class User < ActiveRecord::Base
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :email, :picture_url, presence: true

  attr_reader :password

  before_validation :ensure_session_token, :ensure_profile_pic

  has_many :workouts

  has_many :ran_routes,
    through: :workouts,
    source: :run_route

  has_many :authored_routes,
    class_name: 'RunRoute',
    foreign_key: :author_id,
    primary_key: :id


  # users this user is following
  has_many :following,
    through: :follows,
    source: :followee

  has_many :follows,
    class_name: 'Follow',
    foreign_key: :follower_id,
    primary_key: :id


  # users that are following this user
  has_many :followed_by,
    through: :followed,
    source: :follower

  has_many :followed,
    class_name: 'Follow',
    foreign_key: :followee_id,
    primary_key: :id

  def following?(followee)
    self.following.include?(followee)
  end

  def routes
    return (self.ran_routes + self.authored_routes).uniq
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    if user.is_password?(password)
      return user
    end
    return nil
  end


  def password=(password)
    @password=password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def ensure_profile_pic
    self.picture_url ||= 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_200/v1467673998/profile-icon_qcbhrl.png'
  end


end
