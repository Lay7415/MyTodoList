import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import { useState } from 'react';
import Userlist from './components/UserList';

function App() {
  const [user,setUser] = useState([])
  const onFormDataHundler =(UserData)=> {
    setUser((prevlist) => {
      return [
        ...prevlist,
        {name: UserData.username, password: UserData.password,id: UserData.id}
      ]
    })
  }
  const reListHundler =(newList) => {
    console.log(user.id)
    console.log(newList)
    setUser(user.filter(user => user.id !== newList))
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
