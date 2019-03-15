import React, { Component } from "react";
import Search from "./Search";
import HackerList from "./HackerList";
import api from "../util/api";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class App extends Component {
  state = {
    stories: []
  };

  componentDidMount() {
    this.onRequestApi();
  }

  onRequestApi = async () => {
    const storiesId = await api.get("v0/newstories.json");
    const id = storiesId.data.slice(0, 50);
    const promises = id.map(item => {
      let url = `/v0/item/${item}.json`;
      return api.get(url);
    });
    const results = await Promise.all(promises);

    this.setState({ stories: results.map(result => result.data) });
  };

  onSubmit = text => {
    const match = new RegExp(escapeRegExp(text), "i");
    const result = this.state.stories.filter(story => match.test(story.title));
    if (text != "") {
      this.setState({ stories: result });
    } else {
      this.onRequestApi();
    }
  };

  renderLoading = () => {
    if (this.state.stories.length === 0) {
      return (
        <div className="ui segment">
          <div style={{ textAlign: "center" }}>Loading ...</div>
        </div>
      );
    } else {
      return <HackerList stories={this.state.stories} />;
    }
  };

  render() {
    return (
      <div className="ui container">
        <Search onSubmit={this.onSubmit} />
        {this.renderLoading()}
      </div>
    );
  }
}

export default App;
