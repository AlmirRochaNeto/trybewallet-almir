import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWith';
import mockData from './helpers/mockData';

describe('Login Page', () => {
  test('Verifica os elementos da tela login', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const loginElement = screen.getByPlaceholderText('E-mail');
    const senhaElement = screen.getByPlaceholderText('Senha');
    const buttonElement = screen.getByText('Entrar');
    const inputLoginElement = screen.getByTestId('email-input');
    const inputSenhaElement = screen.getByTestId('password-input');
    expect(loginElement).toBeInTheDocument();
    expect(senhaElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
    expect(inputLoginElement).toBeInTheDocument();
    expect(inputSenhaElement).toBeInTheDocument();
    userEvent.type(inputLoginElement, 'teste@trybe.com');
    userEvent.type(inputSenhaElement, '123456789');
    userEvent.click(buttonElement);
    expect(history.location.pathname).toBe('/carteira');
  });
});

describe('Wallet', () => {
  let initialState = {
    user: {
      email: 'tryber@teste.com',
      senha: 'sdffsd',
      disabled: false,
    },
    wallet: {
      currencies: [
        'USD',
        'CAD',
        'GBP',
        'ARS',
        'BTC',
        'LTC',
        'EUR',
        'JPY',
        'CHF',
        'AUD',
        'CNY',
        'ILS',
        'ETH',
        'XRP',
        'DOGE',
      ],
      expenses: [
        {
          id: 0,
          value: '7',
          description: 'sdfgsdfg',
          method: 'Cartão de crédito',
          tag: 'Transporte',
          currency: 'BTC',
          exchangeRates: {
            USD: {
              code: 'USD',
              codein: 'BRL',
              name: 'Dólar Americano/Real Brasileiro',
              high: '5.211',
              low: '5.1221',
              varBid: '0.0661',
              pctChange: '1.29',
              bid: '5.1881',
              ask: '5.1888',
              timestamp: '1661978675',
              create_date: '2022-08-31 17:44:3',
            },
            USDT: {
              code: 'USD',
              codein: 'BRLT',
              name: 'Dólar Americano/Real Brasileiro Turismo',
              high: '5.235',
              low: '5.135',
              varBid: '0.09',
              pctChange: '1.75',
              bid: '5.07',
              ask: '5.38',
              timestamp: '1661974320',
              create_date: '2022-08-31 16:32:00',
            },
            CAD: {
              code: 'CAD',
              codein: 'BRL',
              name: 'Dólar Canadense/Real Brasileiro',
              high: '3.9719',
              low: '3.9042',
              varBid: '0.039',
              pctChange: '1',
              bid: '3.9495',
              ask: '3.9504',
              timestamp: '1661978676',
              create_date: '2022-08-31 17:44:36',
            },
            GBP: {
              code: 'GBP',
              codein: 'BRL',
              name: 'Libra Esterlina/Real Brasileiro',
              high: '6.0542',
              low: '5.9502',
              varBid: '0.0592',
              pctChange: '0.99',
              bid: '6.0286',
              ask: '6.0299',
              timestamp: '1661978678',
              create_date: '2022-08-31 17:44:38',
            },
            ARS: {
              code: 'ARS',
              codein: 'BRL',
              name: 'Peso Argentino/Real Brasileiro',
              high: '0.0376',
              low: '0.037',
              varBid: '0.0004',
              pctChange: '1.08',
              bid: '0.0374',
              ask: '0.0374',
              timestamp: '1661978675',
              create_date: '2022-08-31 17:44:3',
            },
            BTC: {
              code: 'BTC',
              codein: 'BRL',
              name: 'Bitcoin/Real Brasileiro',
              high: '105.8',
              low: '101.336',
              varBid: '3012',
              pctChange: '2.95',
              bid: '104.88',
              ask: '105.218',
              timestamp: '1661978311',
              create_date: '2022-08-31 17:38:31',
            },
            LTC: {
              code: 'LTC',
              codein: 'BRL',
              name: 'Litecoin/Real Brasileiro',
              high: '286.4',
              low: '272.52',
              varBid: '6.87',
              pctChange: '2.48',
              bid: '282.48',
              ask: '283.5',
              timestamp: '1661978312',
              create_date: '2022-08-31 17:38:32',
            },
            EUR: {
              code: 'EUR',
              codein: 'BRL',
              name: 'Euro/Real Brasileiro',
              high: '5.2373',
              low: '5.1091',
              varBid: '0.0875',
              pctChange: '1.71',
              bid: '5.2146',
              ask: '5.2173',
              timestamp: '1661978676',
              create_date: '2022-08-31 17:44:36',
            },
            JPY: {
              code: 'JPY',
              codein: 'BRL',
              name: 'Iene Japonês/Real Brasileiro',
              high: '0.03757',
              low: '0.03689',
              varBid: '0.0005',
              pctChange: '1.35',
              bid: '0.03736',
              ask: '0.03739',
              timestamp: '1661978679',
              create_date: '2022-08-31 17:44:39',
            },
            CHF: {
              code: 'CHF',
              codein: 'BRL',
              name: 'Franco Suíço/Real Brasileiro',
              high: '5.3424',
              low: '5.2238',
              varBid: '0.0461',
              pctChange: '0.88',
              bid: '5.3016',
              ask: '5.3055',
              timestamp: '1661978675',
              create_date: '2022-08-31 17:44:35',
            },
            AUD: {
              code: 'AUD',
              codein: 'BRL',
              name: 'Dólar Australiano/Real Brasileiro',
              high: '3.5708',
              low: '3.5068',
              varBid: '0.0404',
              pctChange: '1.15',
              bid: '3.5492',
              ask: '3.5502',
              timestamp: '1661978675',
              create_date: '2022-08-31 17:44:35',
            },
            CNY: {
              code: 'CNY',
              codein: 'BRL',
              name: 'Yuan Chinês/Real Brasileiro',
              high: '0.7559',
              low: '0.7409',
              varBid: '0.0117',
              pctChange: '1.58',
              bid: '0.7526',
              ask: '0.753',
              timestamp: '1661978642',
              create_date: '2022-08-31 17:44:02',
            },
            ILS: {
              code: 'ILS',
              codein: 'BRL',
              name: 'Novo Shekel Israelense/Real Brasileiro',
              high: '1.5645',
              low: '1.5328',
              varBid: '0.0191',
              pctChange: '1.24',
              bid: '1.5577',
              ask: '1.5586',
              timestamp: '1661978643',
              create_date: '2022-08-31 17:44:03',
            },
            ETH: {
              code: 'ETH',
              codein: 'BRL',
              name: 'Ethereum/Real Brasileiro',
              high: '8.3',
              low: '7.79643',
              varBid: '229.96',
              pctChange: '2.9',
              bid: '8.15556',
              ask: '8.17526',
              timestamp: '1661978304',
              create_date: '2022-08-31 17:38:24',
            },
            XRP: {
              code: 'XRP',
              codein: 'BRL',
              name: 'XRP/Real Brasileiro',
              high: '1.72',
              low: '1.68',
              varBid: '0.03',
              pctChange: '1.71',
              bid: '1.71',
              ask: '1.72',
              timestamp: '1661978307',
              create_date: '2022-08-31 17:38:27',
            },
            DOGE: {
              code: 'DOGE',
              codein: 'BRL',
              name: 'Dogecoin/Real Brasileiro',
              high: '0.327534',
              low: '0.315923',
              varBid: '0.00406201',
              pctChange: '1.28',
              bid: '0.321407',
              ask: '0.321407',
              timestamp: '1661978674',
              create_date: '2022-08-31 17:44:34',
            },
          },
        },
      ],
      editor: false,
      idToEdit: 0,
      loading: true,
      apiRetur: [],
      total: 736.53,
    },
  };
  test('Verifica os elementos da tela wallet', () => {
    global.fetch = async () => ({
      json: async () => ({
        ...mockData,
      }),
    });
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState });
    const emailElement = screen.getByTestId('email-field');
    expect(emailElement).toBeInTheDocument();
    const despesasElement = screen.getByText('Total de despesas:');
    expect(despesasElement).toBeInTheDocument();
    const totalElement = screen.getByTestId('total-field');
    expect(totalElement).toBeInTheDocument();
    const currencyElement = screen.getByTestId('header-currency-field');
    expect(currencyElement).toBeInTheDocument();
    const valueInputElement = screen.getByTestId('value-input');
    const buttonElement = screen.getByText('Adicionar Despesa');
    userEvent.type(valueInputElement, '10');
    userEvent.click(buttonElement);
    expect(valueInputElement).toHaveValue(null);
    const editButton = screen.getByText('Editar');
    userEvent.click(editButton);
    const buttonSendEdit = screen.getByText('Editar Despesa');
    userEvent.type(valueInputElement, '100');
    userEvent.click(buttonSendEdit);
    expect(valueInputElement).toHaveValue(null);
    const buttonDeleteElement = screen.getByText('Excluir');
    const tableElement = screen.getByRole('table');
    userEvent.click(buttonDeleteElement);
    initialState = {
      id: '',
    };
    expect(tableElement.length).toBe(undefined);
  });
});
