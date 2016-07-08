
var React = require("react");

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){

        this.refs.butt.value ="Uploaded!";
        this.props.postImage(results[0]);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <div className="upload-form">
        <input  type='submit' className="grey-button"
                ref="butt" onClick={this.upload}
                value="upload new image!" />
      </div>
    );
  }
});

module.exports = UploadButton;
