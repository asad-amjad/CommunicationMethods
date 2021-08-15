import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Method 1: Parent To Child",
    };
  }

  handleCallback = (childData) => {
    this.setState({ data: childData });
  };
  
  render() {
    return (
      <div>
            <Child
              getData={this.handleCallback}
              sendData={this.state.data}
            />
      </div>
    );
  }
}
export default Parent;
