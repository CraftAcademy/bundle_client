import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { SELECT_CATEGORY } from "../state/actions/actionTypes";
import { Link } from "react-router-dom";

const CategoryHeader = (props) => {
  const handleItemClick = (event) => {
    props.dispatch({
      type: SELECT_CATEGORY,
      payload: {
        selectedCategory: event.target.id,
        activeItem: event.target.active,
      },
    });
  };

  return (
    <Segment inverted>
      <Menu id="category-header" inverted pointing secondary>
        <Menu.Item
          name="home"
          id=""
          as={Link}
          to={{ pathname: "/" }}
          active={props.activeItem === "all"}
          onClick={handleItemClick}
        ></Menu.Item>
        <Menu.Item
          name="Outdoors"
          id="outdoors"
          as={Link}
          to={{ pathname: "/outdoors" }}
          active={props.activeItem === "outdoors"}
          onClick={handleItemClick}
        >
          Outdoors
        </Menu.Item>
        <Menu.Item
          name="Games"
          id="games"
          as={Link}
          to={{ pathname: "/games" }}
          active={props.activeItem === "games"}
          onClick={handleItemClick}
        >
          Games
        </Menu.Item>
        <Menu.Item
          name="Sports"
          id="sports"
          as={Link}
          to={{ pathname: "/sports" }}
          active={props.activeItem === "sports"}
          onClick={handleItemClick}
        >
          Sports
        </Menu.Item>
        <Menu.Item
          name="Food"
          id="food"
          as={Link}
          to={{ pathname: "/food" }}
          active={props.activeItem === "food"}
          onClick={handleItemClick}
        >
          Food
        </Menu.Item>
        <Menu.Item
          name="Casual"
          id="casual"
          as={Link}
          to={{ pathname: "/casual" }}
          active={props.activeItem === "casual"}
          onClick={handleItemClick}
        >
          Casual
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default connect()(CategoryHeader);
