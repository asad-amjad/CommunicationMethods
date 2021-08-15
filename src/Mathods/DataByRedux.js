import React from "react";
import { connect} from "react-redux";
import Shared from "./Shared";
import { updateData } from "./Store/actions/actions";

class DataByRedux extends React.Component {
  handleData = (event) => {
    event.preventDefault();
    this.props.getUpdate("Method 3: Updated through Redux");
  };

  render() {
    return (
      <>
        <Shared data={this.props.newData.data} />
        <form onSubmit={this.handleData}>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  newData: state.StoreData,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getUpdate: (data) => dispatch(updateData(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataByRedux);
