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
		  events: localStorage.Events ? (JSON.parse(localStorage.Events)) : []
    }
	this.addEvent = this.addEvent.bind(this);
	this.deleteEvent = this.deleteEvent.bind(this);
	this.findEvent = this.findEvent.bind(this);
    }
findEvent(obj, label) {
	var temp = [];
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
			if (obj[i].title === label){ continue;}
			else{
				temp.push(obj[i]);}
        }
    }
    return temp;
}

addEvent (slotInfo){
	let prompted = prompt(
        `selected slot: ${slotInfo.slots.toLocaleString()} ` +
		`\n start ${slotInfo.start.toLocaleString()} ` +
        `\n end: ${slotInfo.end.toLocaleString()}` +
		`\n action: ${slotInfo.action.toLocaleString()}` +
		`\n \n \n Enter the name of your event:`, ``);
	if (prompted != ""){
		const temp = this.state.events;
		var eventObject = {'title': prompted, 'start': slotInfo.start, 'end':slotInfo.end, 'allDay': true, 'desc':''}
		temp.push(eventObject);
		this.setState({
			events : temp
		});
		localStorage.Events = JSON.stringify(temp);
		}
}

deleteEvent(selected){
	let comfirmed = confirm(
		`Are you sure you want to delete this event? \n`+
		`Selected events name is: ${selected.title.toLocaleString()} `
		);
	const temp = this.state.events;
	console.log("This is the object: " + temp.toString());
	var tempNew = this.findEvent(temp, selected.title);
/* 	var tempNew = temp.collectedItems.filter(function(currentObjects){
		return currentObjects.title !== entityObj[selected.title];}); */
	this.setState({
	events : tempNew
	});
	localStorage.Events = JSON.stringify(tempNew);
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
		onSelectEvent = {(selected) => this.deleteEvent(selected)}
		/* selected = {(selected) => this.deleteEvent(selected)} */
		/>
	</div>
  );
}
}