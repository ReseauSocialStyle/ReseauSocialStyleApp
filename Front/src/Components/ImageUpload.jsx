import React from 'react';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: {}, imagePreviewUrl: '', image: props.image };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    if (e.target.files) {
      let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
          image: {
            name: file.name,
            encoding: reader.result,
            size: file.size
          }
        }, () => { console.log("imageUploade state.image " + this.state.image) });

      }

      reader.readAsDataURL(file)
    }

  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Sélectionnez d'abord une image</div>);
    }

    return (
      <div className="previewComponent">
        <input className="fileInput"
          type="file"
          onChange={(e) => this._handleImageChange(e)} />
        {/* <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button> */}
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;