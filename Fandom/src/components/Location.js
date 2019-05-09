import React,{Component} from 'react';
class Location extends Component{
  state={
    items:[],
  };
  display(){

    return  this.state.items.map(i=>{
      return <div className="loc">
              <div className="id" align="center">
                  {i.type}
              </div>
              <div className="name" align="center">
                  {i.name}
              </div>
              <div className="residents" align="center">
                  {this.dis(i.residents.length)}
              </div>
  </div>
    })

  }
dis(a){
  if(a<=1)
  return a+" Resident";
  else
  return a+" Residents";
}
render(){

return(

<div id="main">
  {this.display()}
  </div>
);
}
async componentDidMount(){
  const res=await fetch("https://rickandmortyapi.com/api/location/");
  const data=await res.json();
  console.log(data);
  this.setState({items:data.results});
}
}
export default Location;
