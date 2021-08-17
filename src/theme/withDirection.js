import React from "react";

const withDirection = (Component) =>
  class extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  };

export default withDirection;
