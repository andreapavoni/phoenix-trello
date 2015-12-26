import React, {PropTypes} from 'react';
import { connect }        from 'react-redux';
import Actions            from '../../actions/sessions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  error: state.session.error,
});

class SessionsNew extends React.Component {
  _handleSubmit(e) {
    e.preventDefault();

    let email = this.refs.email;
    let password = this.refs.password;

    this.props.dispatch(Actions.signIn(email.value, password.value));
  }

  _renderError() {
    let { error } = this.props;

    if (!error) return false;

    return (
      <div className="error">
        {error}
      </div>
    );
  }

  render() {
    return (
      <div className='view-container sessions new'>
        <main>
          <header>
            <div className="logo" />
          </header>
          <form onSubmit={::this._handleSubmit}>
            {::this._renderError()}
            <div className="field">
              <input ref="email" type="Email" placeholder="Email" required="true" />
            </div>
            <div className="field">
              <input ref="password" type="password" placeholder="Password" required="true" />
            </div>
            <button type="submit">Sign in</button>
          </form>
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SessionsNew);