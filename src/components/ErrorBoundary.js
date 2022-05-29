import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
  }
  render() {
    return this.state.hasError ? (
      <h1>Error Caught</h1>
    ) : (
      <>{this.props.children}</>
    );
  }
}

export default ErrorBoundary;
