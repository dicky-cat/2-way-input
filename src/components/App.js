import React, {Component} from 'react'

import Converter from './Converter'

const currency = {
  btc: 'Bitcoin',
  usd : 'USD'
};

function convertToBTC(usd) {
  return usd * 4010
}

function convertToUSD(btc) {
  return  btc * 0.00024800
}

function convert(amount, convert) {
  const input = parseFloat(amount);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.handlelBTC = this.handlelBTC.bind(this);
    this.handleUSD = this.handleUSD.bind(this);
    this.state = {
      amount: '', 
      currency: 'btc'};
  }

  handlelBTC(amount) {
    this.setState({currency: 'btc', amount});
  }

  handleUSD(amount) {
    this.setState({currency: 'usd', amount});
  }

  render() {
    const currency = this.state.currency;
    const amount = this.state.amount;
    const btc = currency === 'usd' ? convert(amount, convertToBTC) : amount;
    const dollars = currency === 'btc' ? convert(amount, convertToUSD) : amount;

    return (
      <div>
        <Converter
          currency="btc"
          amount={btc}
          onAmountChange={this.handlelBTC} />
        <Converter
          currency="usd"
          amount={dollars}
          onAmountChange={this.handleUSD} />
      </div>
    );
  }
}
