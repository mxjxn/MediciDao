import React, { Component } from 'react';
import web3 from '../web3';
import { printNumber } from '../helpers';

class BuyDebt extends Component {
  state = {
    error: ''
  };

  buyDebt = (e) => {
    e.preventDefault();
    const amount = this.amount.value
    this.setState({ error: '' });

    if (!amount) {
      this.setState({ error: 'Invalid Amount' });
    } else if (this.props.accountBalance.lt(web3.toWei(amount))) {
      this.setState({ error: `Not enough balance to buy ${amount} debt` });
    } else {
      this.props.buyDebt(amount);
      this.amount.value = '';
    }
  }

  renderError = () => {
    return (
      <p className="error">
        {this.state.error}
      </p>
    )
  }

  render = () => {
    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">Buy Debt</h3>
        </div>
        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div>
                <form className="transfer" ref={(input) => this.wrapUnwrapForm = input} onSubmit={(e) => this.buyDebt(e)}>
                  <label>Amount</label>
                  <input ref={(input) => this.amount = input} type="number" placeholder="0.00" step="0.000000000000000001" />
                  <input type="submit" />
                  {this.state.error ? this.renderError() : ''}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BuyDebt;
