import React from 'react';
import {connect} from 'react-redux';

class Input extends React.Component {
  render() {
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input className="input-box mb-2 mx-sm-3" id="word-guess" type="test" placeholder="enter guess" />
          <button className="submit-button btn btn-primary mb-2" type="submit">Submit</button>
        </form>
      )
    return (
      <div className="component-input">
        { contents }
      </div>
    )
  }
};

const mapStateToProps = ({success}) => {
  return { success };
}

export default connect(mapStateToProps)(Input);
