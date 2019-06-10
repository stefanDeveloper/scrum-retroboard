// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button, Input } from 'reactstrap';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import styles from './Avatar.css';

type Props = {
  sprints: Array,
  image: object,
  images: Array,
  pointType: string,
  sprintId: string,
  scale: number,
  onChange: (file: object) => void,
  onRemove: () => void,
  onScale: (event: object) => void
};

class Avatar extends Component<Props> {
  props: Props;

  render() {
    const {
      sprints,
      sprintId,
      images = sprints.find(sprint => sprint.id === sprintId).image,
      pointType,
      onChange,
      onRemove,
      onScale
    } = this.props;
    return (
      <Container className={styles.avatar}>
        <Dropzone
          onDrop={files => onChange(files[0])}
          noClick
          accept="image/*"
          style={{ width: '250px', height: '250px' }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {images[pointType].url ? (
                <Container className={styles.dragZoneImg}>
                  <Row>
                    <Col>
                      <AvatarEditor
                        height={260}
                        width={300}
                        image={images[pointType].url}
                        scale={images[pointType].scale / 100}
                        border={0}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        type="range"
                        className={styles.scaleInput}
                        min="0"
                        max="100"
                        value={images[pointType].scale}
                        onChange={event => onScale(event)}
                      />
                    </Col>
                  </Row>
                  <Button
                    color="link"
                    className={styles.removeBtn}
                    onClick={() => onRemove()}
                  >
                    <i className="fas fa-trash" />
                  </Button>
                </Container>
              ) : (
                <Container fluid className={styles.dragZone}>
                  <Row className={styles.message}>
                    <Col className={styles.icon}>
                      <i className="fas fa-image" />
                    </Col>
                  </Row>
                  <Row className={`${styles.message} ${styles.title}`}>
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
  sprints: state.scrum.sprints
});

export default connect(
  mapStateToProps,
  null
)(Avatar);
