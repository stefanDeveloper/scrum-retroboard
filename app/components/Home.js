// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import routes from '../constants/routes';

type Props = {
  fluidContainer: boolean
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const { fluidContainer = true } = this.props;
    return (
      <Container fluid={fluidContainer}>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem>Home</BreadcrumbItem>
        </Breadcrumb>
        <h2>Home</h2>
        <Link to={routes.BOARD}>to the Board</Link>
      </Container>
    );
  }
}
