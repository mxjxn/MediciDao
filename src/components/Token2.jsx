import React from 'react';
import AnimatedNumber from '../AnimatedNumber';
import { formatNumber, copyToClipboard, etherscanToken } from '../helpers';

const Token2 = (props) => {
  const token = props.system[props.token];
  const tokenName = props.token.replace('bankDaiToken', 'dai-b').replace('daiToken', 'dai');

  return (
    <div className="col-md-6 col-sm-6 col-xs-12">
      <div className="info-box big">
        <span className={`info-box-icon ${props.color}`}>
          { etherscanToken(props.network, tokenName, token.address) }
        </span>
        <div className="info-box-content">
          {
            token.myBalance &&
            <span className="info-box-number">
              <span style={ { textDecoration: 'underline' } }>
                { etherscanToken(props.network, 'Your Balance', token.address, props.account) }
              </span>
              {
                props.account
                ?
                  <AnimatedNumber
                    value={ token.myBalance }
                    title={ formatNumber(token.myBalance, 18) }
                    formatValue={ n => formatNumber(n, 3) }
                    className="printedNumber"
                    onClick = { copyToClipboard } />
                :
                  <span>N/A</span>
              }
            </span>
          }
          <span className="info-box-number">
            <span>
              { etherscanToken(props.network, 'Total Supply', token.address) }
            </span>
            <AnimatedNumber
              value={ token.totalSupply }
              title={ formatNumber(token.totalSupply, 18) }
              formatValue={ n => formatNumber(n, 3) }
              className="printedNumber"
              onClick = { copyToClipboard } />
          </span>



        </div>

      </div>
    </div>
  )
}

export default Token2;
