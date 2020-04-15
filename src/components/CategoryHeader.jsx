import React from "react";
import { Menu, Segment } from "semantic-ui-react";

const CategoryHeader = (props) => {
  const handleItemClick = (event) => {
    props.dispatch({
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
          to={{ pathname: "/" }}
          active={props.activeItem === "all"}
          onClick={handleItemClick}
        ></Menu.Item>
        <Menu.Item
          name="Outdoors"
          id="outdoors"
          to={{ pathname: "/outdoors" }}
          active={props.activeItem === "outdoors"}
          onClick={handleItemClick}
        >
          Outdoors
        </Menu.Item>
        <Menu.Item
          name="Games"
          id="games"
          to={{ pathname: "/games" }}
          active={props.activeItem === "games"}
          onClick={handleItemClick}
        >
          Games
        </Menu.Item>
        <Menu.Item
          name="Sports"
          id="sports"
          to={{ pathname: "/sports" }}
          active={props.activeItem === "sports"}
          onClick={handleItemClick}
        >
          Sports
        </Menu.Item>
        <Menu.Item
          name="Food"
          id="food"
          to={{ pathname: "/food" }}
          active={props.activeItem === "food"}
          onClick={handleItemClick}
        >
          Food
        </Menu.Item>
        <Menu.Item
          name="Casual"
          id="casual"
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

export default CategoryHeader;
