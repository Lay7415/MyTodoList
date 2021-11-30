import React,{useRef} from "react";

const Form =(props)=> {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const FormSubmitHundler =(event)=> {
        event.preventDefault()
        const user ={
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            id: Math.random().toString()
        }
        props.onFormBridge(user)
    }
    return(<form onSubmit={FormSubmitHundler}>
        <label>username</label>
        <br/>
        <input ref={usernameRef} type="text"/>
        <br/>
        <label>password</label>
        <br/>
        <input ref={passwordRef} type="text"/>
        <br/>
        <button>Add</button>
    </form>)
}

export default Form