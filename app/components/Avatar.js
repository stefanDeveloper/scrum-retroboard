// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import styles from './Avatar.css';

type Props = {
  image: object,
  onChange: (file: object) => void,
  onDelete: () => void
};

export default class Board extends Component<Props> {
  props: Props;

  componentWillUnmount() {
    const { image } = this.props;
    URL.revokeObjectURL(image.preview);
  }

  render() {
    const { image, onChange, onDelete } = this.props;
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
              {image ? (
                <Container fluid className={styles.dragZoneImg}>
                  <AvatarEditor
                    height={250}
                    width={300}
                    image={image}
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
