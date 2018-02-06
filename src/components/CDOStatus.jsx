import React, { Component } from 'react';
import web3 from '../web3';
import { formatSimpleDate, formatDate, formatNumber, printNumber } from '../helpers';

class CDOStatus extends Component {
  componentDidMount() {
  }
  render() {
    let { cdoToken } = this.props.system;
    let { totalSupply, tableData }  = cdoToken;

    return (
      <div id="CDOStatus" className="box collapsed">
        <div className="box-header with-border">
          <h3 className="box-title">CDO Status</h3>
        </div>
        <div className="box-body panel-collapse" >
          <div className="row">
            <div className="col-md-12">
              <table>
                <thead>
                  <tr>
                    <th>CDO id</th>
                    <th>Note Name</th>
                    <th>Debt</th>
                    <th>Outstanding</th>
                    <th>% of Total Debt</th>
                    <th>% Owned by 3rd party</th>
                    <th>Interest Rate</th>
                    <th>Expiration</th>
                    <th>Price Per Token</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>

                {
                  tableData.map(tableItem => {
                    return (
                      <tr key={`tableItem${tableItem.index}`}>
                        <td>{tableItem.index}</td>
                        <td>{tableItem.name}</td>
                        <td>{printNumber(tableItem.totalSupply)}</td>
                        <td>{printNumber(tableItem.outstanding)}</td>
                        <td>{tableItem.totalSupply.div(totalSupply).mul(100).toNumber()}%</td>
                        <td>{tableItem.myBalance.div(totalSupply).mul(100).toNumber()}%</td>
                        <td>{printNumber( tableItem.interest )}%</td>
                        <td>{ tableItem.expDate && formatSimpleDate( tableItem.expDate )}</td>
                        <td>{tableItem.price.toNumber()}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CDOStatus
