import React,{Component} from 'react';

import './App.css';
import Header from'./components/Header';
import Content from'./components/Content';
class App extends Component{
constructor(props){
super(props)
  this.state={
    flag:false,
    text:"abc",
    item:[]
  }
  this.update=this.update
}
update=(flag,text)=>{this.setState({flag,text})}
render(){

  return (

    <div>
    {this.display()}

</div>
    );
  }
  display(){
    if(this.state.flag==false)
    {
      return <div><Header updates={this.update}/>
      <Content chars=""/>
      </div>
    }
    else {
      return <div><Header updates={this.update}/>
      <Content chars={this.state.text}/>
      </div>
    }
  }
}

export default App;
