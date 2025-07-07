import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((err)=>{
      console.log('Error:',err);
    })
  },[])
  return (
   <div>
      <h1>Chai and FullStack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke)=>{
          return <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        }
          
        )
      }
   </div>
  )
}

export default App
