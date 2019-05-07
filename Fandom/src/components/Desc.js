import React,{Component} from 'react';
class Desc extends Component{
display(a){
  if(a===0){
return<p>rick and jones</p>
}
else if(a===1){
return <p>Location</p>}
else if(a===2){
return <p>Characters</p>}
else if(a===3){
return <p>Episodes</p>}
}
render(){
  return(
    <div>
    {
      this.display(this.props.id)

  }
    </div>
  );
}
}
export default Desc;
