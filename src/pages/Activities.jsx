import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Switch, Route } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

moment.locale('en');
BigCalendar.momentLocalizer(moment);

export default class Activities extends Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      return (
        <div className='calendar-container'>
          <BigCalendar
            culture='en-GB'
            events={[]}
            views={['month', 'week','day']}/>
        </div>
      );
    }
  }