import React from 'react';
import Shared from './Shared'

class Child extends React.Component {
  onTrigger = (event) => {
    event.preventDefault();
    this.props.getData("Method 2: Child to Parent");
  };
  render() {
    return (
      <div>
        <Shared data={this.props.sendData}/>
        <form onSubmit={this.onTrigger}>
          <input type="submit" value="Click Me!" />
        </form>
      </div>
    );
  }
}
export default Child;
