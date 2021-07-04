import React,{useState} from 'react'
import AddUser from './Component2/User/AddUser'
import UsersList from './Component2/User/UsersList'

const App2 = () => {
    const [user, setUser] = useState([])

    const addHandler=(uName, uAge)=>{
        setUser((prevData)=>{
           return  [...prevData, {name: uName, age: uAge, id: Math.random().toString}]
        })
    }
    return (
        <div >
            <AddUser onAdd={addHandler}/>
            <UsersList users={user}/>
        </div>
    )
}

export default App2
