import  React from 'react';
import { EventsConsumer } from '../context/eventsContext';
import Event from "./event";

const EventList = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            
             <EventsConsumer>
                {(value) => {
                    return value.events.map(event => (
                        <Event 
                            key = { event.id }
                            event={ event }
                        />
                    ))
                }}
            </EventsConsumer>
        </div>
    );
}

export default EventList;