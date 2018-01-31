import React, { Component } from 'react';
import web3 from '../web3';
import { printNumber } from '../helpers';

class Wrap extends Component {
  state = {
    error: ''
  };

  depositWithdraw = (e) => {
    e.preventDefault();
    const operation = this.operation.value;
    const amount = this.amount.value
    this.setState({ error: '' });

    if (!amount) {
      this.setState({ error: 'Invalid Amount' });
    } else if (operation === 'deposit' && this.props.accountBalance.lt(web3.toWei(amount))) {
      this.setState({ error: `Not enough balance to deposit ${amount} DAI` });
    } else if (operation === 'withdraw' && this.props.system.bankDai.myBalance.lt(web3.toWei(amount))) {
      this.setState({ error: `Not enough balance to withdraw ${amount} DAI-B` });
    } else {
      this.props.wrapUnwrap(operation, amount);
      this.amount.value = '';
    }
  }

  renderError = () => {
    return (
      <p className="error">
        { this.state.error }
      </p>
    )
  }

  render = () => {
    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">Deposit/Withdraw</h3>
        </div>
        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div>
                <form className="transfer" ref={(input) => this.wrapUnwrapForm = input} onSubmit={(e) => this.depositWithdraw(e)}>
                  <p>
                    <strong>Dai Balance</strong> <span>{ this.props.accountBalance.gte(0) ? printNumber(this.props.accountBalance) : 'Loading...' }</span>
                  </p>
                  <p>
                    <strong>Dai-B Balance</strong> <span>{ this.props.system.bankDai.myBalance.gte(0) ? printNumber(this.props.system.bankDai.myBalance) : 'Loading...' }</span>
                  </p>
                  <label>Operation</label>
                  <select ref={(input) => this.operation = input} >
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                  </select>
                  <label>Amount</label>
                  <input ref={(input) => this.amount = input} type="number" placeholder="0.00" step="0.000000000000000001" />
                  <input type="submit" />
                  { this.state.error ? this.renderError() : '' }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Wrap;