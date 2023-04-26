import { useState } from 'react';
import Form from './Form';


const App = () => {

  const[name, setName] =useState('Jonathan Peter')
  const[job, setJob] =useState('Web Designer')
  const[count, setCount] =useState(10)



  const changeName =()=>{
    setName('Jomiloju')
    setJob('Doc')
    
  }

  
  
  return (
    // <div>
    //   <p>
    //     Hello My Name is {name}, I am a {job}
    //   </p>
    //   <button onClick={changeName}>Click Me</button>
    //   <h1>Count: {count}</h1>

    //   <button type="button" class="btn btn-danger" onClick={()=>(setCount(count-1))}>Decrease</button>
    //   <button type="button" class="btn btn-secondary m-1" onClick={()=>(setCount(count*0))} >Reset</button>
    //   <button type="button" class="btn btn-success" onClick={()=>(setCount(count+1))}>Increase</button>
    // </div>

    <>
    <Form/>
    </>

    
  )

  
}

export default App
