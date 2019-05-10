import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Characterlink from './Characterlink';
class Locationdesc extends Component{

state={
  res:[],
};
  fun(){
    const style=this.state.flag?{width:'320%',height:'100%'}:{display:'none'};
    return <div style={style}>
    <h1><i>Location - {this.props.item[this.props.id-1].name}</i></h1>
    <hr/><br/>
    <p style={{fontSize:'20px',padding:'20px'}}><b>Type : </b>{this.props.item[this.props.id-1].type}<br/><br/>
    <b>Dimension : </b>{this.props.item[this.props.id-1].dimension}<br/><br/>
    <b>Created : </b>{this.props.item[this.props.id-1].created}<br/><br/></p>
    <p style={{fontSize:'20px'}}><b>Residents</b></p><ol>
    {this.state.res.map(i=>{
        return <Router><li><Link to={'/character'+i.name}>{i.name}</Link></li>
        <Route exact path={'/character'+i.name} render={()=>{return(<Characterdesc item={i}/>);}}/>
</Router>
    })
    }

    </ol>
      </div>
  }
  drname(p){
          return <li><a href={p}>{console.log(this.state.res)}</a></li>
      }



async componentDidMount(){
  var arr=[];
  for(var i=0;i<this.props.item[this.props.id-1].residents.length;i++){
  const res=await fetch(this.props.item[this.props.id-1].residents[i]);
  const data=await res.json();

  arr[i]=data;
}
  this.setState({res:arr,flag:true});
}
render(){
return(
  <div>
{this.fun()}
</div>
);
}

}
export default Locationdesc;
