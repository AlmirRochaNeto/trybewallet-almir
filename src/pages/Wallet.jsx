import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import EditForm from '../components/EditForm';
import '../style/pages/Wallet.css';

class Wallet extends React.Component {
  render() {
    const { editor } = this.props;
    return (
      <div className="container-header">
        <div className="background-image" />
        <Header />
        {editor ? <EditForm /> : <WalletForm />}
        <Table />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  editor: state.wallet.editor,
});

Wallet.propTypes = {
  editor: propTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
