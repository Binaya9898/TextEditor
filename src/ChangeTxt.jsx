import React, { useState } from 'react'

// import React from 'react'

export default function ChangeTxt(props) {
const [text,setText]=useState("");

function ChangeToUcase(){
  let newText=text.toLocaleUpperCase();
//  console.log( setText(text.toUpperCase()));
setText(newText);
props.showAlert("Changed to Ucase","success");
}

function ChangeToLcase(){
  let newText=text.toLowerCase();
//  console.log( setText(text.toUpperCase()));
setText(newText);
props.showAlert("Changed to Lcase","danger");

}
const Clear=()=>setText('');
function OnChange(event){
setText(event.target.value);
}



  return (
    <>

    <div>
      <textarea className={`form-control my-3 mx-3 bg-${props.mode==="light"?"red":"white"}`} rows="10" onChange={OnChange} value={text}></textarea>
      <button type="button" className="btn btn-success my-3 mx-3" onClick={ChangeToUcase}>Change to Ucase</button>
      <button type="button" className="btn btn-success my-3 mx-3" onClick={ChangeToLcase}>Change to Lcase</button>
      <button type="button" className="btn btn-success  my-3 mx-3" onClick={Clear}>Clear</button>
      </div>
    <div className={`container my-4 text-${props.mode==="light"?"dark":"light"}`}>
      <h4>Total Number of letters are {text.length}</h4>
      <h4>Total Number of words are {text.split(' ').length}</h4>
      <h3>Your Text Preview</h3>
      <p>{text}</p>

    </div>
    </>
  )
}

