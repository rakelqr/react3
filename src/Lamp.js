import React, {Component} from 'react';

class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          on: this.props.on
        };
    }

    handleClick = () => {
        this.setState({ on: !this.state.on});
    }

    render() {
    const light = this.props.on ? 'on': 'off';
    return (
      <div className="Lamp">
        <button onClick={() => {
            this.setState({ on: !this.state.on });
          }} 
          className={light}>
            {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }

  
}

export default Lamp;