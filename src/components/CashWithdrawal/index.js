/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onClickButton = value => {
    this.setState(prevState => {
      console.log(value)
      return {balance: prevState.balance - value}
    })
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="page">
        <div className="card">
          <div className="profile-container">
            <p className="profile-initial">S</p>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-details-container">
            <p className="balance-description">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="balance-currency">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="withdraw-choose">CHOOSE SUM (IN RUPEES)</p>
            <ul type="none" className="denomination-items-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  onClickButton={this.onClickButton}
                  denominationItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
