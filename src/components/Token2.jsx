import React from 'react';
import AnimatedNumber from '../AnimatedNumber';
import { formatNumber, copyToClipboard, etherscanToken } from '../helpers';

const Token2 = (props) => {
  const token = props.system[props.token];
  const debt = props.debt;
  const tokenName = props.token
    .replace('bankDaiToken', 'dai-b')
    .replace('daiToken', 'dai')
    .replace('cdoToken', 'cdo')
    .replace('daiCToken', 'dai-c');
  const address = token.address;
  let style = {
    backgroundColor: props.georgeColor
  }

  return (
    <div className="col-md-6 col-sm-6 col-xs-12">
      <div className={ props.token === 'daiCToken' || props.token === 'cdoToken' ? 'info-box big' : 'info-box' }>
        <span className={`info-box-icon ${props.color}`}>
          {etherscanToken(props.network, tokenName, address)}
        </span>
        <div className="info-box-content">
          {
            token.myBalance &&
            <span className="info-box-number">
              <span style={{ textDecoration: 'underline' }}>
                {etherscanToken(props.network, 'Your Balance', address, props.account)}
              </span>
              {
                props.account
                  ?
                  <AnimatedNumber
                    value={token.myBalance}
                    title={formatNumber(token.myBalance, 18)}
                    formatValue={n => formatNumber(n, 3)}
                    className="printedNumber"
                    onClick={copyToClipboard} />
                  :
                  <span>N/A</span>
              }
            </span>
          }
          <span className="info-box-number">
            <span>
              {etherscanToken(props.network, 'Total Supply', address)}
            </span>
            <AnimatedNumber
              value={token.totalSupply}
              title={formatNumber(token.totalSupply, 18)}
              formatValue={n => formatNumber(n, 3)}
              className="printedNumber"
              onClick={copyToClipboard} />
          </span>
          {
            props.token === 'daiCToken'
              ?
              <span className="info-box-number">
                <span>
                {etherscanToken(props.network, 'Outstanding Debt', address)}
                </span>
                {
                  debt>=0
                  ?
                  <AnimatedNumber
                  value={debt}
                  title={formatNumber(token.totalSupply, 18)}
                  formatValue={n => formatNumber(n, 3)}
                  className="printedNumber"
                  onClick={copyToClipboard} />
                  :
                  'loading...'
                }
                
              </span>
              :
              ''
          }
          {
            props.token === 'cdoToken'
              ?
              <span className="info-box-number">
                <span>
                {etherscanToken(props.network, 'Third Party Debt Owned', address)}
                </span>
                <AnimatedNumber
                  value={token.totalSupply}
                  title={formatNumber(token.totalSupply, 18)}
                  formatValue={n => formatNumber(n, 3)}
                  className="printedNumber"
                  onClick={copyToClipboard} />
              </span>
              :
              ''
          }



        </div>

      </div>
    </div>
  )
}

export default Token2;
