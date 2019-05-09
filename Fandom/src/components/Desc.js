import React,{Component} from 'react';
import './Desc.css';
import Location from './Location';
class Desc extends Component{
  state={
    id:0,
    items:[]
};
display(a){
  if(a===0){
return(
  <div>
    <h1><i>Rick and Morty</i></h1><hr/>
    <p><b>Rick and Morty </b>is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block ‘Adult Swim’. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures. The series premiered on December 2, 2013, and the third season concluded on October 1, 2017. In May 2018, the series was picked up for an additional 70 episodes over an unspecified number of seasons.</p>
    <p>Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of the family. The series originated from an animated short parody film of Back to the Future, The Real Animated Adventures of Doc and Mharti, created by Roiland for Channel 101, a short film festival co-founded by Harmon. When Adult Swim approached Harmon for television show ideas, he and Roiland decided to develop a program based on the short. The series has been acclaimed by critics for its originality, creativity and humor.
    </p>

  </div>
)
}
else if(a===1){
return(
<div>
  <h1><i>Locations</i></h1>
  <hr/>
  <Location />
  </div>
);
}
else if(a===2){
return <p>Characters</p>}
else if(a===3){
return <p>Episodes</p>}
}
render(){
  return(
    <div id="description">
    {
      this.display(this.props.id)

  }
    </div>
  );
}
/*locd(a){
  console.log(a.results);
  return a.results.map(items=>{
    return <div className="loc" display="inline">
            <div className="id" align="center">
                {items.type}
            </div>
            <div className="name" align="center">
                {items.name}
            </div>
            <div className="residents" align="center">
                {items.residents.length+" Residents"}
            </div>
</div>
  })
}
async componentDidUpdate(){

  if(this.props.id===1){
  const res=await fetch("https://rickandmortyapi.com/api/location/");
  const data=await res.json();
  console.log(data);
  document.getElementById("description").innerHTML=this.locd(data);

  }
  else if(this.props.id===2){
  const res=await fetch("https://rickandmortyapi.com/api/character/");
  const data=await res.json();
  console.log(data);

  }
  else if(this.props.id===3){
  const res=await fetch("https://rickandmortyapi.com/api/episode/");
  const data=await res.json();
  console.log(data);

}
else {
  console.log("chutiya");
}

}
*/
}
export default Desc;
