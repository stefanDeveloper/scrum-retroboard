// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import styles from './Avatar.css';
import {
  update as updateImage,
  remove as removeImage
} from '../../actions/image';

type Props = {
  image: object,
  points: [],
  imageType: string,
  onChange: (file: object) => void,
  onDelete: () => void
};

class Avatar extends Component<Props> {
  props: Props;

  componentWillUnmount() {
    const { image } = this.props;
    URL.revokeObjectURL(image.preview);
  }

  render() {
    const { points, imageType, onChange, onDelete } = this.props;
    return (
      <Container fluid>
        <Dropzone
          onDrop={files => onChange(files[0])}
          disableClick
          accept="image/*"
          style={{ width: '250px', height: '250px' }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {points[`image-${imageType}`] ? (
                <Container fluid className={styles.dragZoneImg}>
                  <AvatarEditor
                    height={250}
                    width={300}
                    image={points[`image-${imageType}`]}
                    scale={0.8}
                    border={0}
                  />
                  <Button
                    color="link"
                    className={styles.dragZoneBtn}
                    onClick={() => onDelete()}
                  >
                    <i className="fas fa-trash" />
                  </Button>
                </Container>
              ) : (
                <Container className={styles.dragZone}>
                  <Row>
                    <Col className={styles.icon}>
                      <i className="fas fa-image" />
                    </Col>
                  </Row>
                  <Row className={styles.title}>
                    <Col>Drag and Drop image here.</Col>
                  </Row>
                </Container>
              )}
            </div>
          )}
        </Dropzone>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  points: state.imageReducer
});

const mapDispatchToProps = dispatch => ({
  update: (image, imageType) => dispatch(updateImage(image, imageType)),
  remove: pointType => dispatch(removeImage(pointType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
