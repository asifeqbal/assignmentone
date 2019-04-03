import React, { Component } from 'react';


class Header extends Component {
 constructor(props){
   super(props);
  
 }
 render(){
   return(
      <header>
          <ul>
              <li>Cart: {this.props.count}</li>             
              
          </ul>
      </header>

    
  


   );
 }
}

export default Header;
