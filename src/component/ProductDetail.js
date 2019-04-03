import React, { Component } from 'react';


class ProductDetail extends Component {
 constructor(props){
   super(props);
  
 }
 render(){
   return(
    
   <div className="card text-white bg-dark col-md-5">
   <img className="card-img-top" src={this.props.details.largeImage} alt="Card image cap"/>
   <div className="card-body">
    <h5 className="card-title">{this.props.details.name}</h5>
    <h3>{this.props.details.Quantity}</h3>
    <p className="card-text">{this.props.details.shortDescription}</p>
    <button type="button" className="btn btn-primary" onClick={()=>
        this.props.add1()}>Add</button>&nbsp;&nbsp;
    <button type="button" className="btn btn-primary" 
    onClick={()=>
        this.props.remove2()}>Remove</button>
  </div>

   </div>


   );
 }
}

export default ProductDetail;
