import {useState} from 'react';

export function Button(){
 
const [counter, setCounter] = useState(0) 

function aumentar(){
  setCounter(counter + 1);
}


  return (<button onClick={aumentar}>{counter}</button>)
}