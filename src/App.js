import React from 'react';
import Header from './components/header';
import SearchEvent from './components/searchEvent';
import EventList from './components/eventList';
import CategoriesProvider from './context/categoriesContext';
import EventsProvider from './context/eventsContext';

function App() {
  return (
   <EventsProvider>
      <CategoriesProvider>
        <Header title="EventsBrite"></Header>
        <div className="uk-container">
          <SearchEvent></SearchEvent>
          <EventList></EventList>
        </div>
      </CategoriesProvider>
   </EventsProvider> 
  );
}

export default App;
