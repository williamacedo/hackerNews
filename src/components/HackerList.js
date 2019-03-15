import React from "react";
import HackerItem from "./HackerItem";
const HackerList = ({ stories }) => {
  return (
    <div>
      {stories.map(story => {
        return (
          <div className="ui list">
            <HackerItem key={story.id} story={story} />
          </div>
        );
      })}
    </div>
  );
};

export default HackerList;
