import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import { useState,useEffect } from 'react';
import Userlist from './components/UserList';

function App() {
  const [user,setUser] = useState([])
  const [save,setSave] = useState("false")
  
  const savedData = JSON.parse(localStorage.getItem("users"))
  const onFormDataHundler =(UserData)=> {
    setUser((prevlist) => {
      return [
        ...prevlist,
        {name: UserData.username, password: UserData.password,id: UserData.id}
      ]
    })
    setSave("true")
  }
  useEffect(() => {
    if(save === "true") {
      localStorage.setItem("users", JSON.stringify(user))
      setSave("false")
    }
    setUser([...savedData || []])
  }, [save])
  const reListHundler =(newList) => {
    console.log(user.id)
    console.log(newList)
    setUser(user.filter(user => user.id !== newList))
    setSave("true")
  }
  return (
    <div className="App">
      <Card>
        <Form onFormBridge={onFormDataHundler}/>
        <Userlist reList={reListHundler} userList={user}/>
      </Card>
    </div>
  );
}

export default App;
