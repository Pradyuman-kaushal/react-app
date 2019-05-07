import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Content.css';
import Desc from './Desc';
class Content extends Component{
  state={
    id:0
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
            <tr><td align="center"><Link onClick={this.loc}>Locations</Link></td></tr>
            <tr><td align="center"><Link onClick={this.char}>Characters</Link></td></tr>
            <tr><td align="center"><Link onClick={this.epi}>Episodes</Link></td></tr>
          </table>
        </td>
        <td valign="top">
          <div id="refs">
            <Desc
              id={this.state.id}
            />
          </div>
        </td>
      </tr>
      </table>
        <Route path="/Location" exact render={()=>{return (<h1>Location</h1>);}}/>
        <Route path="/Character" exact render={()=>{return(<h1>Characters</h1>);}}/>
        <Route path="/Episode" exact render={()=>{return(<h1>Episodes</h1>);}}/>
        </div>

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
}
export default Content;
