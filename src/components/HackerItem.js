import React from "react";

const HackerItem = ({ story }) => {
  return (
    <div className="ui segment">
      <a href={story.url}>
        <div className="item">
          <p>
            {story.title} - By: {story.by}
          </p>
        </div>
      </a>
    </div>
  );
};

export default HackerItem;
