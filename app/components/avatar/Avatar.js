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
  onRemove: () => void
};

class Avatar extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = { scale: 0 };
  }

  componentDidMount() {
    this.setState({ scale: 50 });
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ scale: value });
  };

  render() {
    const {
      sprints,
      sprintId,
      images = sprints.find(sprint => sprint.id === sprintId).image,
      pointType,
      onChange,
      onRemove
    } = this.props;
    const { scale } = this.state;
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
              {images[pointType] ? (
                <Container className={styles.dragZoneImg}>
                  <Row>
                    <Col>
                      <AvatarEditor
                        height={260}
                        width={300}
                        image={images[pointType]}
                        scale={scale / 100}
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
                        value={scale}
                        onChange={event => this.handleChange(event)}
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
