import React, { Component } from "react";
import EventsList from "./components/EventsList";
import CategoryHeader from "./components/CategoryHeader"
class App extends Component {
  render() {
    return (
      <>
        <h1>BundleUp</h1>
        <div>
          <CategoryHeader />
          <EventsList />
        </div>
      </>
    );
  }
}
export default App;