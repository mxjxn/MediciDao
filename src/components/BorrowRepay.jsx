import React, { Component } from 'react';
import web3 from '../web3';
import { printNumber } from '../helpers';

class BorrowRepay extends Component {
  state = {
    error: '',
    operation: '',
    token:'daiToken'
  };

  borrowRepay = (e) => {
    e.preventDefault();
    const operation = this.operation.value;
    const amount = this.amount.value;
    const token = this.state.token;

    this.setState({ error: '' });

    if (!amount) {
      this.setState({ error: 'Invalid Amount' });
    } else if (operation === 'repay' && this.props[token].myBalance.lt(web3.toWei(amount))) {
      this.setState({ error: `Not enough balance to repay ${amount} using ${token}` });
    } else {
      this.props.borrowRepay(operation, amount, token);
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

  onChangeOperation = () => {
    this.setState({ operation: this.operation.value });
  }

  onChangeToken = () => {
    this.setState({ token: this.token.value });
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
                  <select ref={(input) => this.operation = input} onChange={this.onChangeOperation} >
                    <option value="borrow">Borrow</option>
                    <option value="repay">Repay</option>
                  </select>
                  {
                    this.state.operation === 'repay'
                      ?
                      <div>
                        <label>Token</label>
                        <select ref={(input) => this.token = input} onChange={this.onChangeToken}>
                          <option value="daiToken">Dai</option>
                          <option value="bankDaiToken">Dai-B</option>
                          <option value="daiCToken">Dai-C</option>
                        </select>
                      </div>
                      :
                      ''
                  }
                  <label>Amount</label>
                  <input ref={(input) => this.amount = input} type="number" placeholder="0.00" step="0.000000000000000001" />
                  <input className="btn-primary" type="submit" />
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
