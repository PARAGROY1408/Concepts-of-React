import React, { useState } from 'react';
function CreateUser() {
    const [name, setname] = useState(""); /* yahan pr name jo ki eik variable hai..uski by defalut value
    "" ye set kr di hai*/
    const [age, setage] = useState("");
    const [address, setddress] = useState("");
    function makeuser() {
        let data={name,age,address}; // js object ko define kr diya hai... yahan pr,,
        console.log("the button is clicked..",data);
    }
    return (
        <>
            <h1> Make a new User...</h1>
            <input type="text" onChange={(e) => setname(e.target.value)} name="username" value={name}></input>
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => setage(e.target.value)} name="age" value={age}></input>
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => setddress(e.target.address)} name="address" value={address}></input>
            <br></br>
            <br></br>
            <button onClick={makeuser}>CreateUser</button>
        </>
    )
}


export default CreateUser; // yahan se export kr diya hai tahki App.js mei import kr sake...
// <> </> this empty tag is nothing but the fragment ....