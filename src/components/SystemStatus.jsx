import React from 'react';
import web3 from '../web3';

const SystemStatus = (props) => {
  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">SAI Status</h3>
      </div>
      <div className="box-body">
        <div className="row">
          <div className="col-md-12">
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>SKR/ETH</th>
                  <th>USD/ETH</th>
                  <th>Liq. Ratio</th>
                  <th>Liq. Penalty</th>
                  <th>Debt Ceiling</th>
                  <th>Deficit</th>
                  <th>Safe</th>
                  <th>Avail. Boom</th>
                  <th>Avail. Bust</th>
                  <th>Fix</th>
                  <th>Fit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    { typeof props.sai.tub.off !== 'undefined' ? (props.sai.tub.off ? 'Off' : 'On') : 'Loading...' }
                  </td>
                  <td>
                    { props.toNumber(props.sai.tub.per).toFixed(3) }
                  </td>
                  <td>
                    { props.toNumber(props.sai.tub.tag).toFixed(3) }
                  </td>
                  <td>
                    { props.toNumber(web3.toBigNumber(web3.fromWei(props.sai.tub.mat)).times(100)).toFixed(3) }%
                  </td>
                  <td>
                    { props.toNumber(web3.toBigNumber(web3.fromWei(props.sai.tub.axe)).times(100)).toFixed(3) }%
                  </td>
                  <td>
                    { props.toNumber(props.sai.tub.hat).toFixed(3) }
                  </td>
                  <td>
                    { props.sai.tub.off === false ? (props.sai.tub.eek ? 'YES' : 'NO') : '-' }
                  </td>
                  <td>
                    { props.sai.tub.off === false ? (props.sai.tub.safe ? 'YES' : 'NO') : '-' }
                  </td>
                  <td>
                    {
                      props.sai.tub.off === false
                      ? <span>
                          Sell { props.toNumber(props.sai.tub.avail_boom_sai).toFixed(3) } SKR<br />
                          Buy { props.toNumber(props.sai.tub.avail_boom_skr).toFixed(3) } SAI
                        </span>
                      : '-'
                    }
                  </td>
                  <td>
                    {
                      props.sai.tub.off === false
                      ? <span>
                          Sell { props.toNumber(props.sai.tub.avail_bust_sai).toFixed(3) } SAI<br />
                          Buy { props.toNumber(props.sai.tub.avail_bust_skr).toFixed(3) } SKR
                        </span>
                      : '-'
                    }
                  </td>
                  <td>
                    { props.sai.tub.off ? props.toNumber(props.sai.tub.fix).toFixed(3) : '-' }
                  </td>
                  <td>
                    { props.sai.tub.off ? props.toNumber(props.sai.tub.fit).toFixed(3) : '-' }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemStatus;
