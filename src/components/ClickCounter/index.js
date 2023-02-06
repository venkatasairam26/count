// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-cont">
        <h1 className="heading">
          The button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p>Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.onIncrease}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
