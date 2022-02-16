import React, { useState, useEffect,Component } from "react";
import { listTodos } from "../graphql/queries";
import "./Pages.css"
import { API, graphqlOperation } from 'aws-amplify'

//onst [order,setorder]=useState("ASC");
class Empeditttt extends Component
{
  
  state = {  id:'',
  name:'',
  age:'',
  email:'',
  dob:'',
  phone:'',
  address:'',
  city:'',
  state:'',
  country:'', employees: [] }

  

  
  async componentDidMount() {
    try {
      
      const apiData = await API.graphql(graphqlOperation(listTodos))
      const employees = apiData.data.listTodos.items
      this.setState({ employees })
      console.log(employees)
      
    } catch (err) {
      console.log('error: ', err)
    }
  }

render() { 
  //const [order,setorder]=useState("ASC");
  // sorting=(col) =>{
  //  if(order==="ASC"){
  //    const sorted =[...employees].sort((a,b)=>
  //    a[col].toLowerCase()>b[col].toLowerCase()?1:-1);
   //   this.setState(sorted);
   //   setorder("DSC");
  //  }
   // if(order==="DSC"){
  //    const sorted =[...employees].sort((a,b)=>
     // a[col].toLowerCase()<b[col].toLowerCase()?1:-1);
   //   this.setState(sorted);
   //   setorder("ASC");
 //  }
//  };
  return (
  <div className="empcontainer0" >
    
<table>
  <tr className="tabletitle">
    <th>Employee-ID</th>
    <th 
     //onClick={()=>sorting("name")}
     >Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Age</th>
    <th>Address</th>
    <th>Country</th>
  </tr>{
    this.state.employees.map((rest, i) => (
  <tr key={i}>
    <td className="tablestyle">{rest.id}</td>
    <td>{rest.name}</td>
    <td>{rest.email}</td>
    <td>{rest.phone}</td>
    <td>{rest.age}</td>
    <td>
      <p>{rest.address}</p>
      <p>{rest.city}</p>
      <p>{rest.state}</p>
      </td>
    <td>{rest.country}</td>  
    </tr>
  ))
  }
</table>
  </div>
);




}


 
}

export default Empeditttt;