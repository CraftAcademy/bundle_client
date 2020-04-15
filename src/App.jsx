import React from "react";
import EventsList from "./components/EventsList";
import CategoryHeader from "./components/CategoryHeader"

const App = props => {  
    return (
      <>
      <CategoryHeader />
      <Switch>
        <Route exact path="/" component={CategoryHeader} />
        <h1>BundleUp</h1>
        <div>
          <EventsList />
        </div>
        </Switch>
      </>
    );
  }

export default App;
