import React from 'react';

var clockStyle = {
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.0)',
      height: '100px',
      width: '100px',
      borderRadius: '50%',
      boxShadow: '0px 0px 0px 10px pink inset',
      position: 'relative',
    };

var secondHandStyle = {
  height: '40px',
  width: '5px',
  backgroundColor: 'red',
  borderRadius: '5px',
  position: 'absolute',
  left: '47.5px',
  top: '10px',
  transformOrigin: '2.5px bottom',
    zIndex: '1'
};

var minuteHandStyle = {
  height: '35px',
  width: '5px',
  backgroundColor: 'white',
  borderRadius: '5px',
  position: 'absolute',
  left: '47.5px',
  top: '15px',
  transformOrigin: '2.5px bottom',
};

var hourHandStyle = {
  height: '30px',
  width: '5px',
  backgroundColor: 'white',
  borderRadius: '5px',
  position: 'absolute',
  left: '47.5px',
  top: '20px',
  transformOrigin: '2.5px bottom',
}

class TraditionalClock extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      size: props.size,
      colour: props.colour,
      degS: 0,
      degM: 0,
      degH: 0
    };

    //Setting Main clock's style
    clockStyle.height = this.state.size + 'px ';
    clockStyle.width = this.state.size + 'px ';
    clockStyle.boxShadow = '0px 0px 0px ' + this.state.size/10 + 'px ' +
      this.state.colour + ' inset';


    //Setting second's hand
    secondHandStyle.height = this.state.size/2 - this.state.size/10 + 'px';
    secondHandStyle.width = this.state.size/20 + 'px';
    secondHandStyle.backgroundColor = this.state.colour;
    secondHandStyle.borderRadius = this.state.size/20;
    secondHandStyle.left = this.state.size/2 - this.state.size/40;
    secondHandStyle.top = this.state.size/10;
    secondHandStyle.transformOrigin = this.state.size/40 + 'px bottom';

    //Setting minute's hand
    minuteHandStyle.height = this.state.size/2 - this.state.size/5 + 'px';
    minuteHandStyle.width = this.state.size/20 + 'px';
    minuteHandStyle.backgroundColor = this.state.colour;
    minuteHandStyle.borderRadius = this.state.size/20;
    minuteHandStyle.left = this.state.size/2 - this.state.size/40;
    minuteHandStyle.top = this.state.size/5;
    minuteHandStyle.transformOrigin = this.state.size/40 + 'px bottom';

    //Setting hour's hand
    hourHandStyle.height = this.state.size/2 - this.state.size/3.5 + 'px';
    hourHandStyle.width = this.state.size/20 + 'px';
    hourHandStyle.backgroundColor = this.state.colour;
    hourHandStyle.borderRadius = this.state.size/20;
    hourHandStyle.left = this.state.size/2 - this.state.size/40;
    hourHandStyle.top = this.state.size/3.5;
    hourHandStyle.transformOrigin = this.state.size/40 + 'px bottom';
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
        degS: this.state.date.getSeconds()*6,
        degM: this.state.date.getMinutes()*6,
        degH: this.state.date.getHours()*6
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
        <div style={Object.assign(minuteHandStyle, {transform: 'rotate('+ String(this.state.degM) +'deg)'})}>
        </div>
        <div style={Object.assign(hourHandStyle, {transform: 'rotate('+ String(this.state.degH) +'deg)'})}>
        </div>
      </div>);
  }
};



export default TraditionalClock;
