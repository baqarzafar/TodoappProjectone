import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';

import { createSlice, configureStore } from '@reduxjs/toolkit'



let store  = createSlice({
  name:"myslice",
  initialState:{todo:[]},
  reducers:{
      addtodo:(state , action)=>{
             state.todo.push(action.payload)
      }
      ,
      removetodo:(state ,action)=>{
       state.todo =  state.todo.filter((data)=>data!=action.payload)
        

      }

  }
})

let addtodo = store.actions.addtodo
let removetodo = store.actions.removetodo
export let store2 = configureStore({
    reducer:store.reducer
})


function Todo(){
  let  stateofstore =   useSelector((data)=>{return data})
   let dispatach  =   useDispatch()
   let array = stateofstore.todo
  let remove = (data)=>{

     dispatach(removetodo(data))
  }
  return(array.map((data)=>{
            return(
              <>
              <h1>{data}</h1>
                <button  style={{ padding:"5px" , backgroundColor:"red"}}     onClick={()=>{remove(data)}}            >Remove To do</button>
            </>
            )
           }))
}





function App() {
      
  

 
 
    let [state , setstate] = useState("")
  let dispatach  =   useDispatch()

    let value =  (e)=>{
        setstate(e.target.value)
    }
    let addtodo1 = ()=>{
       
      dispatach(addtodo(state))

    }
    


 
  return (

      <div >
      <div  style={{display:"grid" , gridTemplateColumns:"repeat(12 , 1fr )" , gridAutoRows:"repeat(2 ,10fr)" , gridAutoRows:"repeat(8 , 4fr)"}}>

        <div style={{gridColumn:"5"}}>
          <input  style={{padding:"5%"  , width:"200px"}} value={state} onChange={value}   ></input> 
        </div>
         <div style={{gridColumn:"7/-1"}}          >
          <button  style={{padding:"10px" , backgroundColor:"orange"}}  onClick={()=>{addtodo1()}}>Add to do</button>
         </div>

         <div style={{gridRow:"2" , gridColumn:"5"}}>
               <Todo></Todo>

           
         </div>


         <div style={{gridRow:"2" , padding:"10px" , gridColumn:"6"}} >
        
         </div>
    </div>
</div>
  );
}

export default App;
