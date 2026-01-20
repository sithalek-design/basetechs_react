import React from "react";
import Car from "./assets/components/test"

export default function App(){
  return (
    <React.Fragment>
      <Car/>
      <h1 style={{color:'red'}}>Hello</h1>
       <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
    <Car/>
    </React.Fragment>
  );
}
