import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './component/search';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import Header from './component/Header';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      searchQuery:"",counter:0
    };

    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addClick = this.addClick.bind(this);
    this.removeClick = this.removeClick.bind(this);

  }
  handleSearchClick(data){
    console.log(data);

    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
    }

    addClick(e){
      console.log(e);
  
      let currentState = this.state;
      currentState.counter++;
      this.setState(currentState);
      }

      removeClick(e){
        console.log(e);
    
        let currentState = this.state;
        if(currentState.counter==0){
          this.setState(currentState);
        }else{
          currentState.counter--;
          this.setState(currentState);
        }
   
        }

    handleChange(data){
        console.log(data);
        let currentState = this.state;
        currentState.searchQuery = data;
        this.setState(currentState);
    }


  render() {
    return (
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
      
    
     
       
         
    </nav><br /><br />
    <Search className="form-control mr-sm-2" search={this.handleSearchClick} searchText={this.handleChange} />
          <label className="glyphicon glyphicon-shopping-cart">{this.state.counter} </label>
    <Header count={this.state.counter}/>
    <ProductList search={this.state.searchQuery} add={this.addClick} remove={this.removeClick} />
    
    </div>
    );
  }
}

export default App;
