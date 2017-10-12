import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

moment.locale('en');
BigCalendar.momentLocalizer(moment);

export default class Activities extends Component {
    constructor(props, context) {
      super(props, context);
	  this.state={
		  /* Retrieve events from localstorage */
		  events: localStorage.events ? (json.parse(localstorage.events)) : [{
				'title': 'Oles party',
				'allDay': true,
				'start': new Date(2017, 11, 10),
				'end': new Date(2017, 11, 13),
				'desc': 'Big conference for important man'
		}]
    }
	this.addEvent = this.addEvent.bind(this);
    }
/*
componentDidMount() {
    const events_const = JSON.parse(localStorage.getItem('events'));
    console.log("Events are: " + events_const);
	var array =[]
	var 
	for (i=0,i<events_const.length;i++){
		array.push(events_const[i]);
		}
	var events_array = Array(events_const.split(,));
    this.setState({
      events: array||[]
    });
    const _this = this;
    this.timer = setInterval(function() {
      _this.setState({
        events: _this.state.events
      })
      localStorage.setItem('events',JSON.stringify(_this.state.events))
    },10000)
  }
  componentWillUnmount() {
      clearInterval(this.timer);
  }
 (slotInfo) => alert(
        `selected slot: ${slotInfo.slots.toLocaleString()} ` +
		`\n start ${slotInfo.start.toLocaleString()} ` +
        `\n end: ${slotInfo.end.toLocaleString()}` +
		`\n action: ${slotInfo.action.toLocaleString()}`
      )
  
  
*/
addEvent (slotInfo){
	let prompted = prompt(
        `selected slot: ${slotInfo.slots.toLocaleString()} ` +
		`\n start ${slotInfo.start.toLocaleString()} ` +
        `\n end: ${slotInfo.end.toLocaleString()}` +
		`\n action: ${slotInfo.action.toLocaleString()}` +
		`\n \n \n Enter the name of your event:`, `SomeEventName`);
	const temp = this.state.events;
	var eventObject = {'title': prompted, 'start': slotInfo.start, 'end':slotInfo.end, 'allDay': true, 'desc':''}
	temp.push(eventObject);
	console.log(temp);
	this.setState({
		events : temp
	});
}

render() {
  return (
	<div className='calendar-container'>
	  <BigCalendar
		culture='en-GB'
		events={this.state.events}
		views={['month', 'week','day']}
		selectable
		onSelectSlot= {(slotInfo) => this.addEvent(slotInfo)}
		/>
	</div>
  );
}
}