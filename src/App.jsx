import React, { useState, useEffect } from "react";
import EventsList from "./components/EventsList";
import { Button } from "semantic-ui-react";
import EventCreate from "./components/EventCreate";
import axios from "axios";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [createEvent, setCreateEvent] = useState(false);
  const [showEvent] = useState(true);
  const [events, setEvents] = useState([]);
  const [login, LoginForm] = useState(false);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      setEvents(response.data.events);
    } catch (error) {}
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  const setLoginForm = async () => {
    try {
      const response = await axios.get("/api/users");
      setLoginForm(response.data.users);
    } catch (error) {}
  };
  return (
    <>
      <h1>BundleUp</h1>
      <div>
        <Button
          id="login"
          onClick={() => {
            LoginForm(!login);
          }}
        >
          {" "}
          Login
        </Button>
        <Button
          id="create-button"
          color="blue"
          onClick={() => {
            setCreateEvent(!createEvent);
          }}
        >
          {" "}
          Create Event{" "}
        </Button>
        {createEvent && <EventCreate fetchEvents={fetchEvents} />}
        {showEvent && <EventsList events={events} />}
        {login && <LoginForm login={login} />}
      </div>
    </>
  );
};

export default App;
