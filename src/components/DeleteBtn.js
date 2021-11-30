import React from "react";

const DeleteBtn =(props)=> {
    const onDeleteHundler=()=> {
        console.log(props.deleteTodo)
        props.delBridge(props.deleteTodo)
    }
    return <button onClick={onDeleteHundler}>{props.children}</button>
}
export default DeleteBtn