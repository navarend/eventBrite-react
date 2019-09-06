import  React, { Component } from 'react';
import Axios from 'axios';

const eventsContext = React.createContext();
export const EventsConsumer = eventsContext.Consumer;

class EventsProvider extends Component {
    token = 'MDZNZXKFNLYTV7BK2CVS';
    order = 'date';

    state = {
        dataEvent : []
    }

    getEvents = async (search) => {
        const url = `https://www.eventbriteapi.com/v3/events/search/?q=${ search.name }&categories=${ search.category }&sort_by=${ this.order }&token=${ this.token }&locale=es_ES`;
        let events = await Axios(url);
        // console.log(events);
        this.setState({
            dataEvent : events.data.events
        })
    }

    render(){
        return (
            <eventsContext.Provider 
                value={{ 
                        events: this.state.dataEvent,
                        getEvents: this.getEvents
                     }}>
                { this.props.children }
            </eventsContext.Provider >
        );
    }
}

export default EventsProvider;