import React from "react";
import DeleteBtn from "./DeleteBtn";

const Userlist =(props)=> {
    const DelBridgeHundler =(dataInBridge) => {
        props.reList(dataInBridge)
    }
    return <div>
        <ul>
            {props.userList.map(user =>
            <div key={user.id}>
                <li >{user.name} {user.password} {user.id}</li>
                <DeleteBtn delBridge={DelBridgeHundler} deleteTodo={user.id}>DeleteTodo</DeleteBtn>
            </div>    
            )}
        </ul>
    </div>
}

export default Userlist