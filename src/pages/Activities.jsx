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
		  events:[]
    }
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

 (
  slotInfo: {
    start: Date,
    end: Date,
    slots: Array<Date>,
    action: "select" | "click"
  }
) => any
   */
  
render() {
  return (
	<div className='calendar-container'>
	  <BigCalendar
		culture='en-GB'
		events={[{
				'title': 'Oles party',
				'allDay': true,
				/* general format on dates : (year, month, day) */
				'start': new Date(2017, 0, 10), /* format on start : (year, month, day) day is included in event) Months are 0-indexed */
				'end': new Date(2017, 0, 11), /* format on dates : (year, month, day ) day is NOT included in event. Months are 0-indexed */
				'desc': 'Big conference for important man'
			  }]}
		views={['month', 'week','day']}
		selectable
		/* onSelectSlot= */
		/>
	</div>
  );
}
}