import React from "react";

class Search extends React.Component {
  state = { input: "" };

  onChangeInput = event => {
    this.setState({ input: event.target.value });
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: 20 }}>
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <input
              type="text"
              onChange={this.onChangeInput}
              placeholder="Buscar Noticias"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
