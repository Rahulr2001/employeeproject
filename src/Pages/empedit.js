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
<table className="pctable">
  <tr className="tabletitle">
    <th>Employee-ID</th>
    <th 
     
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
<table>
  {
    this.state.employees.map((rest, i) => (
      <table className="mobiletable">
      <tr className="mtname">
        <th>Name</th>
        <td>{rest.name} |   ID:{rest.id}</td>
        </tr>
      
      <tr className="mtda">
        <th className="mtdobt">
          <p>Date of birth:</p>
        </th>
        <th className="mtaget">
          Age:
        </th>
        </tr>
        <tr>
        
         <td className="mtage">{rest.dob}</td> 
        <td className="mtdob">{rest.age}</td>
        
      </tr>
      
      <th className="mtaddresst">Address:</th>
      <td className="mtaddress">
      <p>{rest.address}</p>
      <p>{rest.city}</p>
      <p>{rest.state}</p>
      </td>
      <tr className="mtcountryt">
        <th>Country:</th>
        <td className="mtcountry">{rest.country}</td>
      </tr>
      <tr>
        <th>
          Email id:
        </th>
        <td>
          {rest.email}
        </td>
      </tr>
      <tr>
        <th>
          Phone.num:
        </th>
        <td>
          {rest.phone}
        </td>
      </tr>
      
  </table>
  
  ))
  }
  </table>

  </div>
);




}


 
}

export default Empeditttt;