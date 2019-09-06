import React, { Component } from 'react';
import { CategoriesConsumer } from '../context/categoriesContext';
import { EventsConsumer } from '../context/eventsContext';

class SearchEvent extends Component {
    state = {
        name: '',
        category: ''
    }

    getEventData = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render () {
        return (
            <EventsConsumer>
                { (value) => {
                    return(
                        <form onSubmit={ e => { 
                            e.preventDefault();
                            value.getEvents(this.state)
                        }}>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Find the event by name or category
                                </legend>
                            </fieldset>
        
                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input name="name" className="uk-input" type="text" placeholder="Please type name event or city" onChange={ this.getEventData }></input>
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select className="uk-select" name="category" onChange={ this.getEventData }>
                                        <option value="">Please selecte a category</option>
                                        <CategoriesConsumer>
                                            { (value) => {
                                                return(
                                                    value.categories.map( category => (
                                                        <option key={ category.id } value={ category.id } data-uk-form-select>{ category.name_localized }</option>
                                                    ))
                                                )
                                            }}
                                        </CategoriesConsumer>
                                    </select>
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <input className="uk-button uk-button-danger" value="Find Event" type="submit"></input>
                                </div>
                            </div>
                        </form>
                    );
                }}

            </EventsConsumer>
        );
    }
}

export default SearchEvent;