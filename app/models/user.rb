class User < ActiveRecord::Base
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true

  attr_reader :password

  has_many :workouts

  before_validation :ensure_session_token

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


end
