import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

class Activities extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      return (
        <div>
          <BigCalendar
            culture='en-GB'
            events={this.props.tasks}
            views={['month', 'week']}/>
        </div>
      );
    }
  }