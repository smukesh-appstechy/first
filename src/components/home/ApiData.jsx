import React from 'react'
import { useEffect, useState } from 'react'

const ApiData = () => {
    const [users, setUsers] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const responce = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!responce.ok){
                    throw new Error(`HTTP error! status: ${responce.status}`)
                }
                const data = await responce.json();
                setUsers(data);
            }
            catch(err){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    },[]);
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error}</p>
    }
  return (
    <>
    <h2>user list</h2>
    <ul>
       
        {users.map((user) => (
        <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
        </li>
        ))}

    </ul>
    
    </>
  )
}

export default ApiData