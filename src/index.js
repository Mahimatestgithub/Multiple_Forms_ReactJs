import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';


ReactDOM.render( <App />,document.getElementById('root'));

//Spread operator denoted by ...
 // eg1 of Spread operator (basically it conacatenates)

//const fullName=["mahima","gupta"];
//const biodata=[1,26,'male',...fullName];
//console.log(fullName);
//console.log(biodata);

// eg2 of Spread operator 

//var shootGames=['x','y','z'];
//var raceGames=['u','v','x'];
//var games = [...shootGames,...raceGames];

// eg3 of Spread operator->Destructuring of an array
//var shootGames=['x','y','z'];
//var [first,...remaining]=shootGames;
//console.log(first); //means 'x'
//console.log(remaining);

//eg4
const fullName ={
  fname: "mahima",
  lname: "thapa",
}
const biodata ={
  id: 1,
  ...fullName,
  age: 26,
  gender: 'male',
};
console.log(biodata);