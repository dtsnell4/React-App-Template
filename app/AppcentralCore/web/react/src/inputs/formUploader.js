import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { FormGroup, Label, FormText } from 'reactstrap';
import { toastr } from 'react-redux-toastr';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

class UploaderImageList extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    /* eslint-disable-next-line */
    this.parentEl = document.getElementsByClassName('e-file-select-wrap')[0];
    this.el.id = 'image-list';
    this.parentEl.appendChild(this.el);
  }
  componentWillUnmount() {
    this.parentEl.removeChild(this.el);
  }


  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

UploaderImageList.propTypes = {
  children: propTypes.array,
};

/* eslint-disable-next-line */
class FormUpload extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpload = this.handleUpload.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleUpload(e) {
    this.props.handleUpload(e);
  }
  /* eslint-disable */
  handleSelect(eventArgs) {
    if (this.props.maxFileCount && (this.props.fileList ? this.props.fileList.length : 0) >= this.props.maxFileCount) {
      toastr.error('Error', `A maximum of ${this.props.maxFileCount} file(s) allowed`);
      eventArgs.cancel = true;
    } else if (eventArgs.filesData[0].size > 4100000) {
      toastr.error('Error', 'A maximum of 4mb per file allowed');
      eventArgs.cancel = true;
    } else if (this.props.allowedExtensions && !this.props.allowedExtensions.includes(eventArgs.filesData[0].type)) {
      toastr.error('Error', `Only files of the following types are allowed ${this.props.allowedExtensions.map((t) => `.${t}`).join(', ')}`);
      eventArgs.cancel = true;
    }
  }
  /* eslint-enable */

  formatBytes(a, b) {
    if (a === 0) return '0 Bytes';
    const c = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const d = Math.floor(Math.log(a) / Math.log(1024));
    /* eslint-disable-next-line */
    const bytes = parseFloat((a / (Math.pow(1024, d))).toFixed(b || 2)) + c[d];
    return bytes;
  }

  render() {
    const imageList = (
      this.props.showFileList &&
      <UploaderImageList>
        {this.props.fileList && this.props.fileList.map((file) => (
          <div key={file.id}>
            <div className="upload-thumb">
              <div>
                {file.link && file.name && <img src={file.link} alt={file.name} />}
                {this.props.removeFile && <button type="button" className="remove-image" onClick={() => { this.props.removeFile(file); }}><i className="fa fa-times"></i></button>}
              </div>
              <div>{file.name}</div>
              <div>{this.formatBytes(file.size)}</div>
            </div>
          </div>
        ))}
      </UploaderImageList>
    );
    console.log('ll', imageList);
    return (
      <div>
        <FormGroup className="image-uploader">
          <Label>{this.props.label}</Label>
          <UploaderComponent
            multiple={false}
            name={this.props.name}
            asyncSettings={{ saveUrl: this.props.uploadPath }}
            upload={this.handleUpload}
            allowedExtensions={this.props.allowedExtensions ? this.props.allowedExtensions.map((t) => `.${t}`).join(', ') : undefined}
            selected={this.handleSelect}
          />
          {this.props.recommended && <FormText color="muted">{this.props.recommended}</FormText>}
        </FormGroup>
        {imageList}
      </div>
    );
  }
}


FormUpload.propTypes = {
  /** The file types that are allowed to be uploaded.  Null implies all file types */
  allowedExtensions: propTypes.array,
  /** The list of files that have been selected */
  fileList: propTypes.array.isRequired,
  /** Label for the form group of the component */
  label: propTypes.string,
  /** Optional property to display thumbnails of images beneath the component */
  handleUpload: propTypes.func.isRequired,
  /** Name for the components element */
  maxFileCount: propTypes.number,
  /** Path where the files get uploaded to the server */
  name: propTypes.string,
  /** Message to be displayed beneath the uploader for file sizes, etc. */
  recommended: propTypes.string,
  /** Function that executes when when removing a file from the list */
  removeFile: propTypes.func,
  /** Maximum number of files allowed for upload */
  showFileList: propTypes.bool,
  /** Function that executes when the upload button is clicked */
  uploadPath: propTypes.string.isRequired,
};

export default FormUpload;
