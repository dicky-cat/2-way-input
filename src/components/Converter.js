
import React, {Component} from 'react'

  
 export default class Converter extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.props.onAmountChange(e.target.value);
    }

    render() {
      const amount = this.props.amount;
      return (
        <section>
          <h1>Enter Amount </h1>
          <input value={amount}
                 onChange={this.handleChange} />
        </section>
      );
    }
  }
