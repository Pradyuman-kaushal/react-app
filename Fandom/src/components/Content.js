import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './Header';
import './Content.css';
import Desc from './Desc';
import Characterlink from './Characterlink';
class Content extends Component{

  state={
items:[],
    id:0,

  };

  constructor(){
    super();
    this.loc=this.loc.bind(this);
    this.char=this.char.bind(this);
    this.epi=this.epi.bind(this);
  }


    render(){
    return(
      <Router>
      <div id="q">
      <table width="100%">
      <tr>
        <td id="side" valign="top">
          <table align="center">
            <tr style={{paddingTop:'10%'}}><td align="center"><Link to={"/lc"} onClick={this.loc} >Locations</Link></td></tr>
            <tr style={{paddingTop:'2%'}}><td align="center"><Link to={"/ch"} onClick={this.char} >Characters</Link></td></tr>
            <tr style={{paddingTop:'2%'}}><td align="center"><Link to={"/ep"} onClick={this.epi} >Episodes</Link></td></tr>
          </table>
        </td>
        <td valign="top">
          <div id="refs">

          {this.searchbar()}

          </div>
        </td>
      </tr>
      </table>
        </div>
        <Route exact path="/lc"/>
        <Route exact path="/ch"/>
        <Route exact path="/ep"/>
      </Router>
    );

}
loc(){

  this.setState({id:1});

}

char(){
  this.setState({id:2});
}
epi(){
  this.setState({id:3});
}
sbar(){
  var header=new Header;
  return header.func();
}
searchbar(){
  if(this.props.chars.length==0){
    console.log("x1")
    return <Desc
      id={this.state.id}
    />
  }
  else{

    for(var i=0;i<this.state.items.length;i++){

      if(this.props.chars===this.state.items[i].name)
    {console.log(this.state.items.length);
      return <Characterlink item={this.state.items[i]}/>;
    }
  }
  return <h1>Not Found</h1>
}
}
async componentDidMount(){
  const res=await fetch("https://rickandmortyapi.com/api/character/");
  const data=await res.json();
  console.log(data);
  this.setState({items:data.results});
}
}
export default Content;
