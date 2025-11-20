import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch("http://localhost:5000/api/message")
    //ftech("/api/message")
    .then((res)=>res.json())
    .then((data)=>{
      setMessage(data.message)
    })
    .catch((err)=>{
      console.log("Error Fetching Data:", err)
    })
  },[])

  return (
    <>
    <h1>Production Level Setup</h1>
      <p >
        data {message}
      </p>
    </>
  )
}

export default App
