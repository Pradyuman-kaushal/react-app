import React,{Component} from 'react';
import logo from './logo.png';
import search from './search.png'
import './Header.css';
const p={
  float:'right'
};
const q={
  margin:'15px'
};

class Header extends Component{

  render(){

    return(

      <div id="top">

      <img src={logo} alt="logo" id="logo"/>
      <p id="search">
      <p class="content" style={q}>Character</p>
      <input type="text" placeholder="Episode or Character or Location"/>
      <p class="content" style={p} >
      <img src={search} alt="search"/></p>
      </p>
      </div>
    );
  }
}
export default Header;
