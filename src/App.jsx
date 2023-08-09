import { useState } from 'react'

import './App.css'
function App({count,setCount,image,name,price,sale,strike,rating}) {
  
  const [view, setview] = useState(true);

  const handleadding=()=>{
    console.log(count)
    setCount(count + 1);
    setview(false);
  }

  const removecart=()=>{
    setCount(count-1)
    setview(true); 
  };

  return (
    <>
    <div className='card'>
      <div className='image'> 
  <span class="badge badge-light">{sale}</span>
      <img src={image}alt='image'/>
      </div>

      <div className='product'>
         <p>{name}</p>
         <p>
          <span className='text-muted text-decoration-line-through'>{strike}</span>
          {price}</p>
          <p>{rating}{rating}{rating}{rating}{rating}</p>
         <div className='card-foot'>
      
       {view==true? <button onClick={handleadding} >Add to Cart</button>:<button onClick={removecart} >Remove from Cart</button>}
       </div>
      </div>

    </div>
      
    </>
  )
}

export default App
