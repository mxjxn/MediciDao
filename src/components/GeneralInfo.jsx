import React, { Component } from 'react';
import web3 from  '../web3';
import { etherscanAddress } from '../helpers';

const settings = require('../settings');

class GeneralInfo extends Component {

  changeTub = (e) => {
    e.preventDefault();
    const top = this.top ? this.top.value : null;
    if (top) {
      //this.form.reset();
      this.props.initContracts(top);
    }
  }

  render() {
    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">General Info</h3>
        </div>

        <div className="box-body">
          <div className="row">
            <div className="col-md-6">
              <div style={ {textTransform: 'capitalize'} }><strong>Network:</strong> { this.props.network === 'main' ? 'mainnet' : this.props.network }</div>
              <div>
                <strong>Account:</strong> { this.props.account
                                            ? etherscanAddress(this.props.network, this.props.account, this.props.account)
                                            : <span style={{ 'color': 'red' }}>
                                                { web3.currentProvider.constructor.name === 'MetamaskInpageProvider'
                                                ? 'METAMASK ACCOUNT LOCKED'
                                                : 'NO ACCOUNT FOUND - READ ONLY MODE'
                                                }
                                              </span> }
              </div>
              {
                settings.chain[this.props.network].proxyFactory
                ?
                  <div>
                    <strong>Proxy Profile:</strong> { this.props.proxy
                                                      ? etherscanAddress(this.props.network, this.props.proxy, this.props.proxy)
                                                      : 'No Proxy Profile created for this Account'}
                  </div>
                :
                  ''
              }
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseAddresses" aria-expanded="false" id="toggle-addresses" className="collapsed">
                <span>Show</span><span>Hide</span> contracts addresses
              </a>
              <div id="collapseAddresses" className="panel-collapse collapse" aria-expanded="false" style={{ height: "0px" }}>
                <div><strong>Bank:</strong> { etherscanAddress(this.props.network, this.props.bankDai, this.props.bankDai) }</div>
                <div><strong>Dai:</strong> { etherscanAddress(this.props.network, this.props.dai, this.props.dai) }</div>
                <div><strong>Dai-B:</strong> { etherscanAddress(this.props.network, this.props.bankDaiToken, this.props.bankDaiToken) }</div>
                <div><strong>Dai-C:</strong> { etherscanAddress(this.props.network, this.props.daiCToken, this.props.daiCToken) }</div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="box-group" id="accordion">
                <div className="panel box box-primary collapsed">
                  <div className="box-header with-border" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false">
                    <h3 className="box-title">
                      Change Top
                    </h3>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse" aria-expanded="false" style={{ height: "0px" }}>
                    <div className="box-body">
                      <form ref={(input) => this.form = input} onSubmit={this.changeTub} className="form-horizontal">
                        <div className="form-group">
                          <label htmlFor="tubInput" className="col-sm-3 control-label">Top Address</label>
                          <div className="col-sm-9">
                            <input ref={(input) => this.top = input} id="topInput" type="text" className="form-control" placeholder="Enter a valid top address" />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-info pull-right">Update</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default GeneralInfo;
