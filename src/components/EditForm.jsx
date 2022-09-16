import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCurrencies, updateExpense } from '../redux/actions';
import '../style/components/WalletForm.css';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { dispatch, toEdit } = this.props;
    dispatch(fetchCurrencies());
    const { value, description, currency, method, tag } = toEdit;
    this.setState({
      value,
      description,
      currency,
      method,
      tag,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, toEdit, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expenseToEdit = expenses.find((expense) => expense.id === toEdit);
    const editedExpense = {
      ...expenseToEdit,
      id: toEdit.id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: toEdit.exchangeRates,
    };
    dispatch(updateExpense(editedExpense));
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form
        className="wallet-form-box"
      >
        <label className="description-label" htmlFor="description">
          Descrição da despesa
          {' '}
        </label>
        <input
          data-testid="description-input"
          className="description-input"
          name="description"
          type="text"
          onChange={ this.handleChange }
          value={ description }
        />

        <label htmlFor="tag">
          Categoria da despesa
          {' '}
        </label>
        <select
          data-testid="tag-input"
          className="tag-input"
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <label className="value-label" htmlFor="value">
          Valor
          {' '}
        </label>
        <input
          data-testid="value-input"
          className="value-input"
          name="value"
          type="number"
          onChange={ this.handleChange }
          value={ value }
        />

        <label htmlFor="method">
          Método de pagamento
          {' '}
        </label>
        <select
          data-testid="method-input"
          className="method-input"
          name="method"
          onChange={ this.handleChange }
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <label htmlFor="currency">
          Moeda
          {' '}
        </label>
        <select
          data-testid="currency-input"
          className="currency-input"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
        >
          <option value={ currencies[0] }>{ currencies[0] }</option>
          <option value={ currencies[1] }>{ currencies[1] }</option>
          <option value={ currencies[2] }>{ currencies[2] }</option>
          <option value={ currencies[3] }>{ currencies[3] }</option>
          <option value={ currencies[4] }>{ currencies[4] }</option>
          <option value={ currencies[5] }>{ currencies[5] }</option>
          <option value={ currencies[6] }>{ currencies[6] }</option>
          <option value={ currencies[7] }>{ currencies[7] }</option>
          <option value={ currencies[8] }>{ currencies[8] }</option>
          <option value={ currencies[9] }>{ currencies[9] }</option>
          <option value={ currencies[10] }>{ currencies[10] }</option>
          <option value={ currencies[11] }>{ currencies[11] }</option>
          <option value={ currencies[12] }>{ currencies[12] }</option>
          <option value={ currencies[13] }>{ currencies[13] }</option>
          <option value={ currencies[14] }>{ currencies[14] }</option>
        </select>

        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Editar Despesa
        </button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  toEdit: state.wallet.toEdit,
});

WalletForm.propTypes = {
  dispatch: propTypes.func.isRequired,
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  expenses: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    value: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    exchangeRates: propTypes.objectOf(propTypes.objectOf),
  })).isRequired,
  toEdit: propTypes.shape({
    id: propTypes.number.isRequired,
    value: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    exchangeRates: propTypes.objectOf(propTypes.objectOf),
  }).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
