import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

export default class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state={
	  startDate: new Date(2017, 9, 1),
	  endDate: new Date(2020,9,1),
      ticks:0,
	  defaultDate: moment(),
    }
	moment.locale('no');
	BigCalendar.momentLocalizer(moment);
  }
 


  componentDidMount() {
    const ticks = Number(localStorage.getItem('timer'));
    console.log("ticks are " + ticks);
    this.setState({
      ticks: ticks||0
    });
    const _this = this;
    this.timer = setInterval(function() {
      _this.setState({
        ticks: _this.state.ticks+1
      })
      localStorage.setItem('timer',JSON.stringify(_this.state.ticks))
    },1000)
  }
  
  componentWillUnmount() {
      clearInterval(this.timer);
  }	
  render() {
	const MyCalendar = props => (
		<BigCalendar
		  defaultDate={moment()}
		  startAccessor= {moment()}
		  endAccessor={moment()}
		/>
	)
	  
    return (
	<div>
		<h1>{this.state.ticks}</h1>
			<BigCalendar
			  defaultDate={moment()}
			  startAccessor= {moment()}
			  endAccessor={moment()}/>
	</div>
	)
  }
}
