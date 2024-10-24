import { useEffect, useState } from 'react'
import JsonCards from '../Compontent/JsonCards';
import { Link } from 'react-router-dom';
import Desc from './Desc';

const Apis = () => {

  const[users,setUser] = useState([]);

  useEffect(()=>{
    const getUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json();
      setUser(data);
      console.log(users);
    }
    getUsers();
  },[])

  return (
   <div className='p-4 '>
    <h3 className='text-center'>Test of Apis</h3>
    
    <section className='grid grid-cols-2 md:grid-cols-3 gap-4' >
      {
        users.slice(0,10) .map((user,i) =>{
          return <JsonCards key={i} id={user.id} title={user.title} body_content={user.body} />
          
          

        } )
      }
      
    </section>
   </div>
  )
}

export default Apis
