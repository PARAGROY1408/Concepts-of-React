import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
function Users() {
    /*
    const user = [  // eik normal array of js objects ko hamne define kr diya hai..
        {
            name: "Parag",
            age: 21,
            address: "Banaglore"
        },
        {
            name: "Nikhil",
            age: 22
        },
        {
            name: "Tushar",
            age: 23
        }
    ]*/
    const [user,setuser]=useState([]); // [] ye krna necessary hai bcz the data is coming in the form of array of objects..
    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result=>{
                console.log("the result is here..",result);
                setuser(result.data);
            })
        },[]);// yahan[] pr ye isiliye kiya hai thaki vo sirf eik he baar update ho...
    })
    return (
        <>
            <h1> User Listing is here..</h1>
            <h1> User Listing is here..</h1>
            <h1> User Listing is here..</h1>
            <h1> User Listing is here..</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                    {
                        // user.map ka use kiya hai thats why no need for forEach loop
                        user.map((item,index)=> // idex ki key bnati hai warning ko remove krne ke liye
                        {
                            <tr key={index}>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                                <td>{item.employee_age}</td>
                            </tr>
                        })
                    }
                </thead>
                <tbody>
                    {
                        /*
                        user.map((item,i) =>
                            <tr key={i}>
                                <td>1</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                            </tr>
                        )*/
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Users

    /*
    -> listing is done here...
    // yahan pr map se he direct ho gya hai...we dont have to use the forEach loop here..
    // ye h1 ke baad likha hai..
    {
         user.map((item,i)=>
            <div key={i}>{item.name},{item.age}</div>
            )
    }
     */