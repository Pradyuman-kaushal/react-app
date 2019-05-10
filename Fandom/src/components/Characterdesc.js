import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
class Characterdesc extends Component{

state={
  res:[],
};
  fun(){
    const style=this.state.flag?{width:'320%',height:'100%'}:{display:'none'};
    return <div style={style}>
    <h1><i>Character - {this.props.item[this.props.id-1].name}</i></h1>
    <hr/><br/>
    <span><img src={this.props.item[this.props.id-1].image} style={{float:"left",margin:'20px'}} alt="img"/></span>
    <p style={{fontSize:'20px',padding:'10px'}}><b>Species : </b>{this.props.item[this.props.id-1].species}<br/><br/><br/>
    <b>Status : </b>{this.props.item[this.props.id-1].status}<br/><br/><br/>
    <b>Gender : </b>{this.props.item[this.props.id-1].gender}<br/><br/><br/>
    <b>Origin : </b>{this.props.item[this.props.id-1].origin.name}<br/><br/><br/>
    <b>Last Location : </b>{this.props.item[this.props.id-1].location.name}<br/></p>
    <p style={{fontSize:'20px'}}><b>Episodes</b></p>
    <ol><Router>
    {this.state.res.map(i=>{
        return <li><Link>{i}</Link></li>
    })
  }</Router>
    </ol>
      </div>
  }
  drname(p){
          return <li><a href={p}>{console.log(this.state.res)}</a></li>
      }



async componentDidMount(){
  var arr=[];
  for(var i=0;i<this.props.item[this.props.id-1].episode.length;i++){
  const res=await fetch(this.props.item[this.props.id-1].episode[i]);
  const data=await res.json();

  arr[i]=data.name;
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
export default Characterdesc;
