import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/components/LoginBox.css';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { login } from '../redux/actions';

class LoginBox extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabledButton: true,
      redirectTo: null,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const minLength = 6;
      const isDisabled = !(password.length >= minLength && email.includes('.com'));
      this.setState({
        disabledButton: isDisabled,
      });
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(login(this.state));
    this.setState({
      redirectTo: '/carteira',
    });
  };

  render() {
    const { email, password, disabledButton, redirectTo } = this.state;
    if (redirectTo) {
      return (
        <Redirect to={ redirectTo } />
      );
    }
    return (
      <form
        className="box"
        onSubmit={ this.handleSubmit }
      >
        <h1>TrybeWallet</h1>
        <input
          data-testid="email-input"
          className="email-input"
          name="email"
          onChange={ this.handleChange }
          placeholder="E-mail"
          type="text"
          value={ email }
        />
        <input
          data-testid="password-input"
          className="password-input"
          name="password"
          onChange={ this.handleChange }
          placeholder="Senha"
          type="password"
          value={ password }
        />
        <button
          type="submit"
          disabled={ disabledButton }
        >
          Entrar

        </button>
      </form>
    );
  }
}

LoginBox.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect()(LoginBox);
