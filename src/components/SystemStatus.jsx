import React from 'react';
import web3 from  '../web3';
import { WAD, printNumber } from '../helpers';

const SystemStatus = (props) => {
  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">SAI Status</h3>
      </div>
      <div className="box-body">
        <div className="row">
          <div className="col-md-12 system-status">
            <div>
              <strong>Status</strong>
              <span className={ props.sai.tub.reg.gt(0) ? 'error-color' : 'success-color' }>
                {
                  props.sai.tub.reg.gte(0)
                  ?
                    (props.sai.tub.reg.eq(0) ? 'Active' : (props.sai.tub.reg.eq(1) ? 'Inactive' : 'Unknown'))
                  :
                    'Loading...'
                }
              </span>
            </div>
            <div>
              <strong>SKR/ETH</strong>
              {
                props.sai.jar.per.gte(0)
                ?
                  printNumber(props.sai.jar.per)
                :
                  <span>Loading...</span>
              }
            </div>
            <div>
              <strong>ETH/USD</strong>
              {
                props.sai.pip.val.gte(0)
                ?
                  printNumber(props.sai.pip.val)
                :
                  <span>Loading...</span>
              }
            </div>
            <div>
              <strong>SAI/USD</strong>
              {
                props.sai.tip.par.gte(0)
                ?
                  printNumber(props.sai.tip.par)
                :
                  <span>Loading...</span>
              }
            </div>
            <div>
              <strong>Liq. Ratio</strong>
              {
                props.sai.tub.mat.gte(0)
                ?
                  <span>{ printNumber(props.sai.tub.mat.times(100)) }%</span>
                :
                  <span>Loading...</span>
              }
            </div>
            <div>
              <strong>Liq. Penalty</strong>
              {
                props.sai.tub.axe.gte(0)
                ?
                  <span>{ printNumber(props.sai.tub.axe.times(100).minus(web3.toWei(100))) }%</span>
                :
                  <span>Loading...</span>
              }
            </div>
            <div>
              <strong>Debt Ceiling</strong>
              {
                props.sai.tub.hat.gte(0)
                ?
                  printNumber(props.sai.tub.hat)
                :
                  <span>Loading...</span>
              }
            </div>
            <div>
              <strong>Gap (join/exit)</strong>
              {
                props.sai.jar.gap.gte(0)
                ?
                  <span>{ printNumber(props.sai.jar.gap.times(100).minus(WAD.times(100))) }%</span>
                :
                  <span>Loading...</span>
              }
            </div>
            <div>
              <strong>Gap (boom/bust)</strong>
              {
                props.sai.tap.gap.gte(0)
                ?
                  <span>{ printNumber(props.sai.tap.gap.times(100).minus(WAD.times(100))) }%</span>
                :
                  <span>Loading...</span>
              }
            </div>
            <div>
              <strong>Deficit</strong>
              <span>{ props.sai.tub.reg.eq(0) ? (props.sai.tub.eek !== 'undefined' ? (props.sai.tub.eek ? 'YES' : 'NO') : 'Loading...') : '-' }</span>
            </div>
            <div>
              <strong>Safe</strong>
              <span>{ props.sai.tub.reg.eq(0) ? (props.sai.tub.safe !== 'undefined' ? (props.sai.tub.safe ? 'YES' : 'NO') : 'Loading...') : '-' }</span>
            </div>
            <div>
              <strong>CDP Fee (365 days)</strong>
              <span>
                {
                  props.sai.tub.tax.gte(0)
                  ?
                    <span>{ printNumber(web3.toWei(web3.fromWei(props.sai.tub.tax).pow(60 * 60 * 24 * 365)).times(100).minus(web3.toWei(100))) }%</span>
                  :
                    <span>Loading...</span>
                }
              </span>
            </div>
            <div>
              <strong>Interest Rate (365 days)</strong>
              <span>
                {
                  props.sai.tip.way.gte(0)
                  ?
                    <span>{ printNumber(web3.toWei(web3.fromWei(props.sai.tip.way).pow(60 * 60 * 24 * 365)).times(100).minus(web3.toWei(100))) }%</span>
                  :
                    <span>Loading...</span>
                }
              </span>
            </div>
            <div>
              <strong>Total liquidity available via bust and boom</strong>
              <span className="boom-bust">
                {
                  props.sai.tub.reg.eq(0)
                  ? <span>
                      Sell { printNumber(props.sai.tub.avail_boom_skr) } SKR<br />
                      Buy { printNumber(props.sai.tub.avail_boom_sai) } SAI
                    </span>
                  : '-'
                }
              </span>
              <span className="boom-bust">
                {
                  props.sai.tub.reg.eq(0)
                  ? <span>
                      Sell { printNumber(props.sai.tub.avail_bust_sai) } SAI<br />
                      Buy { printNumber(props.sai.tub.avail_bust_skr) } SKR
                    </span>
                  : '-'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemStatus;
