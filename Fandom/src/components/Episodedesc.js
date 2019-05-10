import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
class Episodedesc extends Component{

state={
  res:[],
  flag:false
};
  fun(){
    const style=this.state.flag?{width:'320%',height:'100%'}:{display:'none'};
    return <div style={style}>
    <h1><i>Episode - {this.props.item[this.props.id-1].name}</i></h1>
    <hr/><br/>
    <p style={{fontSize:'20px',padding:'20px'}}><b>Episode Number : </b>{this.props.item[this.props.id-1].episode}<br/><br/>
    <b>Air Date : </b>{this.props.item[this.props.id-1].air_date}<br/><br/>
    <b>Created : </b>{this.props.item[this.props.id-1].created}</p>
    <p style={{fontSize:'20px'}}><b>Characters</b></p><ol><Router>
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
  for(var i=0;i<this.props.item[this.props.id-1].characters.length;i++){
  const res=await fetch(this.props.item[this.props.id-1].characters[i]);
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
export default Episodedesc;
