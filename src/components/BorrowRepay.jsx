import React, { Component } from 'react';
import web3 from '../web3';
import { printNumber } from '../helpers';

class BorrowRepay extends Component {
  state = {
    error: ''
  };

  borrowRepay = (e) => {
    e.preventDefault();
    const operation = this.operation.value;
    const amount = this.amount.value
    this.setState({ error: '' });

    if (!amount) {
      this.setState({ error: 'Invalid Amount' });
    } else if (operation === 'repay' && this.props.accountBalance.lt(web3.toWei(amount))) {
      this.setState({ error: `Not enough balance to repay ${amount} DAI` });
    } else {
      this.props.borrowRepay(operation, amount);
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
          <h3 className="box-title">Borrow/Repay</h3>
        </div>
        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div>
                <form className="transfer" ref={(input) => this.wrapUnwrapForm = input} onSubmit={(e) => this.borrowRepay(e)}>
                  <label>Operation</label>
                  <select ref={(input) => this.operation = input} >
                    <option value="borrow">Borrow</option>
                    <option value="repay">Repay</option>
                  </select>
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

export default BorrowRepay;
