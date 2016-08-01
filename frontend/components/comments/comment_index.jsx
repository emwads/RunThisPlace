const React = require('react');
const CommentForm = require('./comment_form');
const CommentIndexItem = require('./comment_index_item');
const Link = require('react-router').Link;


const CommentIndex = React.createClass({
  displayComments() {
    if (this.props.comments.length !== 0 ){
      return this.props.comments.map( (comment)=> {
        return <CommentIndexItem  comment={comment}
                                  key={comment.id} />;
      });
    }

  },

  render () {
    return(
      <div className="comment-listing">

        <div className="saved-comments">
          {this.displayComments()}
        </div>

        <CommentForm workoutOwner={this.props.workoutOwner}
                      workoutId={this.props.workoutId} />


      </div>
    );

  }

});

module.exports = CommentIndex;
