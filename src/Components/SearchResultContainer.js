import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../Utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  //----------------------- When this component mounts, search the randomeuser.me API for list of employees------------------------------//
  componentDidMount() {
    this.searchEmployee("");
  }

  searchEmployee = () => {
    API.search()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  //---------------------- When the form is submitted, search the randomuser.me API for `this.state.search`---------------------//
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };
  
// -----------------------------------render list to the page----------------------------------------//
  render() {
    return (
      <div>
       <div class="jumbotron jumbotron-fluid">
          <div class="container">
          <h1 class="display-4">Employee Directory</h1>
      </div> 
      </div>
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results}
          search={this.state.search}
         />
      </div>
      </div>
    );
  }
}

export default SearchResultContainer;
