import React,{useState} from 'react';

const Capitalise=(word)=>{
const lower=word.toLowerCase();
let p;
 
p=lower.charAt(0).toUpperCase()+ lower.slice(1);
console.log(p);
return p;

}

function alert(props) {
    return (
       props.text && <div>
    <div className={`alert alert-${props.text.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalise(props.text.type)}.{props.text.message}</strong> 
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
            
        </div>
    );
}

export default alert;