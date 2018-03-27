import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Footer extends React.Component {
  render() {
    return (
      <footer className="sticky-footer">
        <div className="container">
          <div className="text-center">
            <small>Copyright © Your Website 2018</small>
          </div>
        </div>
      </footer>
    )
  }
};
function mapDispathToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}
export default connect(null, mapDispathToProps)(Footer)