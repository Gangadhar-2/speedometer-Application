// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}
  accelerate = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }
  applyBrake = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }
  render() {
    return (
      <div className="bg">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <h1 className="head">Speed is {this.state.speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="acc" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="brake" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
