import React, { Component } from 'react';


class Search extends Component{

    constructor(props){

        super(props);

    } 
        
        render(){
            return(
                <div className="row">
                <input type="text" placeholder="Search" onChange ={(e)=>
                {this.props.searchText(e.target.value)}} className="col-md-4 from-control" />
                <button className="ml-1 btn btn-primary" onClick={()=>{
                    this.props.search("Hello world")
                }} className="btn btn-primary">Search</button>               
                
                </div>
            )
        }
    }

    export default Search;