import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import '../style/components/Header.css';
import vector from '../style/components/email.jpg';
import vector1 from '../style/components/$.png';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce(
      (acc, { value, currency, exchangeRates }) => {
        const totalValue = acc + value * exchangeRates[currency].ask;
        return totalValue;
      },
      0,
    );
    return (
      <header className="header-box">
        <h1>TrybeWallet</h1>
        <img className="total-vec" src={ vector1 } alt="vector-email" />
        <h4
          className="total-label"
        >
          Total de despesas:
        </h4>
        <h4
          className="total-box"
          data-testid="total-field"
        >
          { Number(total).toFixed(2) }
        </h4>
        <h4
          className="currency-box"
          data-testid="header-currency-field"
        >
          BRL
        </h4>
        <img className="email-vec" src={ vector } alt="vector-email" />
        <h4
          className="email-box"
          data-testid="email-field"
        >
          {' '}
          { email }
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    value: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    exchangeRates: propTypes.objectOf(propTypes.objectOf),
  })).isRequired,
};
export default connect(mapStateToProps)(Header);
