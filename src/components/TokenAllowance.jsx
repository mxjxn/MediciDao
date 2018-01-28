import React, { Component } from 'react';

class TokenAllowance extends Component {
  state = {
    error: ''
  };

  change = (e) => {
    const token = e.target.getAttribute('data-token');
    const dst = e.target.getAttribute('data-dst');
    const val = e.target.getAttribute('data-val') === 'true';

    if (token === 'all') {
      this.props.approveAll(val);
    } else {
      this.props.approve(token, dst, val);
    }
  }

  onOff = (token, dstAux = null) => {
    const check = token === 'all'
                  ? this.props.system.gem.tubApproved && this.props.system.gem.tapApproved && this.props.system.skr.tubApproved && this.props.system.skr.tapApproved && this.props.system.dai.tubApproved && this.props.system.dai.tapApproved
                  : this.props.system[token][`${dstAux}Approved`]
    const dst = token === 'all' ? 'all' : dstAux;
    return (
      <div className="onoffswitch">
        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id={`myonoffswitchp${token}${dst}`} checked={ check } data-token={ token } data-dst={ dst } data-val={ !check } onChange={ this.change } />
        <label className="onoffswitch-label" htmlFor={`myonoffswitchp${token}${dst}`}>
            <span className="onoffswitch-inner"></span>
            <span className="onoffswitch-switch"></span>
        </label>
      </div>
    )
  }

  render = () => {
    return (
      <div className="box">
        
      </div>
    )
  }
}

export default TokenAllowance;