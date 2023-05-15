import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HEADS_IMG_URL, totalHeads: 0, totalTails: 0}

  onClickTossCoin = () => {
    const {totalHeads, totalTails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = totalHeads
    let latestTailsCount = totalTails

    if (tossResult === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else if (tossResult === 1) {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      totalHeads: latestHeadsCount,
      totalTails: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, totalHeads, totalTails} = this.state
    const totalScore = totalHeads + totalTails
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={tossResultImage} alt="head-or-tails" className="image" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="points-container">
            <p className="total points">Total:{totalScore}</p>
            <p className="heads points">Heads:{totalHeads}</p>
            <p className="tails points">Tails:{totalTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
