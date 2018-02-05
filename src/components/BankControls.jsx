import React, { Component } from 'react';
import web3 from '../web3';
import { WAD, printNumber, print, wdiv, wmul } from '../helpers';
import Stats from './Stats';

class BankControls extends Component {
  state = {
    viewMore: false
  };

  saveStorage = (e) => {
    localStorage.setItem('statusCollapsedControls', localStorage.getItem('statusCollapsedControls') === "true" ? false : true)
  }

  viewMore = (e) => {
    e.preventDefault();
    this.setState({ viewMore: true });
  }

  hide = (e) => {
    e.preventDefault();
    this.setState({ viewMore: false });
  }

  render = () => {
    return (
      <div className="box collapsed test">
        <div className="box-header with-border" data-toggle="collapseControls" data-parent="#accordion" href="#collapseControlsStatus" onClick={this.saveStorage} aria-expanded={localStorage.getItem('statusCollapsedControls') !== 'true'}>
          <h3 className="box-title">Bank Controls</h3>
        </div>
        <div id="collapseControlsStatus" className={`box-body panel-collapse collapse${localStorage.getItem('statusCollapsedControls') !== 'true' ? ' in' : ''}`} aria-expanded={localStorage.getItem('statusCollapsedControls') !== 'true'} style={{ height: localStorage.getItem('statusCollapsedControls') !== 'true' ? "auto" : "0px" }}>
          <div className="row">
            <div className="col-md-12 system-status">
              <div className="main" >
                <div className="buttonContainer">
                  <button className="btn-control" onClick={this.props.collectInterest}>Collect Interest</button>
                  <button className="btn-control" onClick={this.props.realizeCDOPaymentsAsThirdParty}>3rd Party Interest Collection</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BankControls;
