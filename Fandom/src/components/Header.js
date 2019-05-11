import React,{Component} from 'react';
import logo from './logo.png';
import search from './search.png'
import './Header.css';
import Characterlink from './Characterlink';
const p={
  float:'right'
};
const q={
  margin:'15px'
};

class Header extends Component{
constructor(){
  super();
  this.func=this.func.bind(this);
  this.state={
    items:[],
    ch:""
  }

}
funi(){
  console.log(this.ref.name.value);
  /*for(var i=0;i<this.state.items.length;i++){
    if(this.state.items[i].name.equals(this.ref.name.value)){

      return <Characterlink item={this.state.items[i]}/>*/



}
  render(){

    return(

      <div id="top">

      <img src={logo} alt="logo" id="logo"/>
      <p id="search">
      <p class="content" style={q}>Character</p>
      <input type="text" placeholder="Enter Any Character" id="ch"/>
      <p class="content" style={p} >
      <img src={search} alt="search" onClick={this.func}/>
      </p>
      </p>
      </div>
    );
  }
  func(){
    var x=document.getElementById("ch").value;
    this.setState({ch:x});
  }
  getcha(){
    return this.state.ch;
  }
  async componentDidMount(){
    const res=await fetch("https://rickandmortyapi.com/api/character/");
    const data=await res.json();
    console.log(data);
    this.setState({items:data.results});
  }
}
export default Header;
