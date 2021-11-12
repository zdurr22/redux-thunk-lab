import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatList from './CatList';
import { fetchCats } from './actions/catActions';


class App extends Component {   

  componentDidMount() {
    this.props.fetchCats();
  }

  handleLoad = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }

  }
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.handleLoad}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {fetchCats})(App);

