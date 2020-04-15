import React, { useState, useEffect } from "react";
import axios from "axios";
import { Placeholder, List } from "semantic-ui-react";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/events");
        setEvents(response.data.events);
      } catch (error) {}
    };

    fetchEvents();
  }, []);

  return (
    <>
      {events.map((event) => {
        return (
          <div id={"event-" + event.id} key={event.id}>
            <Placeholder>
              <h3 id="title">{event.title}</h3>
              <Placeholder.Paragraph>
                <p id="description">{event.description}</p>
              </Placeholder.Paragraph>
              <List.Item>
                <List.Icon name="users" />
                <List.Content id="category">{event.category}</List.Content>
              </List.Item>
            </Placeholder>
          </div>
        );
      })}
    </>
  );
};

export default EventsList;
