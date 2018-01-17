import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthorizedRoute extends React.Component {

  componentWillMount() {
    // getLoggedUser();
  }

  render() {
    const { component: Component, pending, isLoggedIn, ...rest } = this.props;

    return (
      <Route {...rest} render={props => {
        if (pending) return <div>Loading...</div>
        return isLoggedIn
          ? <Component {...props} />
          : <Redirect to="/auth/login" />
      }} />
    );
  }
}

const mapStateToProps = () => {
  return (state, props) => {
    return {
      isLoggedIn: state.users.get('isLoggedIn'),
      // add pending for loading logic
    };
  };
};

export default connect(mapStateToProps)(AuthorizedRoute);
