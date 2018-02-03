import React, { Component } from 'react';
import web3 from '../web3';
import { printNumber } from '../helpers';

class BuyDebt extends Component {
  state = {
    error: '',
    cdo: '',
    token: 'daiToken'
  };

  buyDebt = (e) => {
    e.preventDefault();
    const amount = this.amount.value
    const cdo = this.cdo.value
    const token = this.state.token
    this.setState({ error: '' });

    if (!amount) {
      this.setState({ error: 'Invalid Amount' });
    } else if(!cdo){
      this.setState({ error: 'Invalid CDO' });
    }else if (this.props[token].myBalance.lt(web3.toWei(amount))) {
      this.setState({ error: `Not enough balance to buy ${amount} debt` });
    } else {
      this.props.buyDebt(amount, token, cdo);
      this.amount.value = '';
    }
  }

  onChangeToken = () =>{
    this.setState({token: this.token.value})
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
                  <label>
                    CDO
                  </label>
                  <input ref={(input) => this.cdo = input} value={this.state.cdo} onChange={this.onChangeTo} type="text" placeholder="0x" />
                  <label>Amount</label>
                  <input ref={(input) => this.amount = input} type="number" placeholder="0.00" step="0.000000000000000001" />
                  <label>Token</label>
                  <select ref={(input) => this.token = input} onChange={this.onChangeToken}>
                    <option value="daiToken">Dai</option>
                    <option value="bankDaiToken">Dai-B</option>
                  </select>
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
