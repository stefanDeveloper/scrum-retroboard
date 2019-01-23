// @flow
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';

type Props = {
  image: object,
  onChange: (file: object) => void
};

export default class Board extends Component<Props> {
  props: Props;

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    const { image } = this.props;
    URL.revokeObjectURL(image.preview);
  }

  render() {
    const { image, onChange } = this.props;
    return (
      <Container fluid>
        <Dropzone
          onDrop={files => onChange(files[0])}
          disableClick
          accept="image/*"
          style={{ width: '250px', height: '250px' }}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop files here...</p>
              ) : (
                <p>
                  Try dropping some files here, or click to select files to
                  upload.
                </p>
              )}
              <AvatarEditor width={250} height={250} image={image} />
            </div>
          )}
        </Dropzone>
      </Container>
    );
  }
}
