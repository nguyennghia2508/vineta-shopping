import React from 'react';

export default class extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: 'www.javatpoint.com',
    };
  }

  render() {
    return <div>Content here</div>;
  }
}