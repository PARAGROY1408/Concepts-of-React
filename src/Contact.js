import React,{useState} from 'react'
/* usEffect and useState is basically realated to Hooks bcz it is a functional component..*/
function Contact(props) // it is basically a functional component...
{
    const [val,setval]=useState("Parag"); // isse input box mei pass kr denge..
    const test=(e)=>
    {
        console.warn("Test is done bahi....",e.target.value);
        setval(e.target.value);
    }
    return(
        <div>
            <h1> Contact Us Component..</h1>
            <input type="text" value={val}onChange={test}></input>
            <button onClick={function()
            {
                alert(val);
            }}>Click Me</button>
            
        </div>
    )
}
export default Contact
// pehle iss compoment ko yahan se export kr diya hai...
// ab App.js mei pehle import karenge starting mei and then phir use karnge..

/* -> props is expllined in this..
//const [name,setName]=useState("parag") // ye eik state define ki hai..aage isse update karenge
    //const[age,setAge]=useState("21");
    let data="Conatct us page through the variable.."
    // this useEffect is a life cycle metehod in hooks...
    useEffect(function(){ 
        console.warn("hello from props....",props.name);
    },[]) 
    useEffect(()=>{
       console.warn("hello from props when get updated.....",props.name);
    },[props.name]) // ye jo array pass kiya hai isse control karenge ki ye function kab kab chalega..
*/