import React from 'react';

var clockStyle = {
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.0)',
      height: '100px',
      width: '100px',
      borderRadius: '50%',
      boxShadow: '0px 0px 0px 10px pink inset'
    }

var secondHandStyle = {
  height: '50px',
  width: '10px',
  backgroundColor: 'red',
  borderRadius: '5px',
  position: 'relative',
  left: '47.5px',
  top: '10px',
  transformOrigin: '2.5px bottom',
}

class TraditionalClock extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      size: props.size,
      colour: props.colour,
      degS: 0
    };

    clockStyle.height = this.state.size + 'px ';
    clockStyle.width = this.state.size + 'px ';

    secondHandStyle.height = this.state.size/2 - this.state.size/10 + 'px';
    secondHandStyle.width = this.state.size/20 + 'px';
  }

  componentDidMount(){
    this.timer = setInterval(() => this.timerTick(), 1000);
        this.timerTick();
  }

  componendWillunmount(){
    clearInterval(this.timer);
  }

  timerTick(){
    this.setState(
      {date: new Date(),
        degS: this.state.date.getSeconds()*6
      }
    );
    /*console.log(this.state.date.getHours() + ':'
     + this.state.date.getMinutes() + ':' +
     this.state.date.getSeconds());*/
  }

  render(){
    return (
      <div style={clockStyle}>
        <div style={Object.assign(secondHandStyle, {transform: 'rotate('+ String(this.state.degS) +'deg)'})}>
        </div>
      </div>);
  }
};



export default TraditionalClock;
