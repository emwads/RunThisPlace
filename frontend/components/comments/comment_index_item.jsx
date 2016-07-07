const React = require('react');
const Link = require('react-router').Link;


const CommentIndexItem = React.createClass({

  render () {
    return(
      <div className="single-comment">
        <img className="user-thumb" src={this.props.comment.picture_url} />

          {this.props.comment.body}
      </div>
    );

  }

});

module.exports = CommentIndexItem;
