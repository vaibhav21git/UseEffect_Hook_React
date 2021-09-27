import React , {useState , useEffect} from "react";




const App = () =>
{
    const [num,setnum] = useState(0);
    const [nums,setnums] = useState(0);

    useEffect(()=>
    {
        alert('i am clicked!!');
    },[num])

    return (
      <> 
          <button onClick = {()=>
          {
            setnum(num+1); 
          }}>click me {num} </button>
          <br/>
          <button onClick = {()=>
          {
            setnums(nums+1); 
          }}>click me {nums} </button>
          
      </>
    )

}; 

export default App;



// here when the app Component will change use effect will work each time if there is any type of change
// after render it will be always executed
 