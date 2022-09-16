import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import '../style/components/Table.css';
import { deleteButtonClick, editExpense } from '../redux/actions';

class Table extends Component {
  handleDelete = (event) => {
    const { dispatch } = this.props;
    dispatch(deleteButtonClick(event));
  };

  handleEdit = (event) => {
    const { dispatch } = this.props;
    dispatch(editExpense(event));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div className="blue-box">
        <table>
          <thead>
            <tr>
              <th className="desc">Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ Number(expense.value).toFixed(2) }</td>
                <td>{ expense.exchangeRates[expense.currency].name }</td>
                <td>
                  {
                    Number(
                      expense.exchangeRates[expense.currency].ask,
                    ).toFixed(2)
                  }
                </td>
                <td>
                  {
                    Number(
                      expense.value * expense.exchangeRates[expense.currency].ask,
                    ).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    className="editbtn"
                    type="button"
                    onClick={ () => {
                      this.handleEdit(expense);
                    } }
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete-btn"
                    className="deletebtn"
                    type="button"
                    onClick={ () => {
                      this.handleDelete(expense);
                    } }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    value: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    exchangeRates: propTypes.objectOf(propTypes.objectOf),
  })).isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
