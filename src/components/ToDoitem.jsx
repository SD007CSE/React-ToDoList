import React, { useState } from "react";
function ToDoitem(props){

    function lineThrough(){

    }
    //style={{textDecoration:"line-through"}}

    return <div onClick={()=>
    props.onChecked(props.id)
    }>
     <li>{props.item}</li>
     </div>
}

export default ToDoitem;