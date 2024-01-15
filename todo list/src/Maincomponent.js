import React, { useState } from "react";


function Maincomponent() {

 const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     fullName:'',
     mobileNumber:'',
     email:''
    }
 );
 
 const handleChange=(e)=>{  
     const newInput = (data)=>({...data, [e.target.name]:e.target.value})
    setformInputData(newInput)
 }
  
 const handleSubmit = (e) =>{
     e.preventDefault();     
     const checkEmptyInput = !Object.values(formInputData).every(r=>r==="")
     if(checkEmptyInput){ 
        const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {fullName:'', mobileNumber:'', email:''}
      setformInputData(emptyInput);
    }
    }  

    const handleDelete = (e) => {
        const newData = [...tableData]
        newData.splice(e, 1)
        setTableData(newData)
    }

 return(
     <>
         <div >
         <div >
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" placeholder="Enter your Full Name" />
          </div>
          <div >
            <input type="email" onChange={handleChange} value={formInputData.mobileNumber} name="mobileNumber" placeholder="Enter your Mobile number" />
          </div>
          <div >
            <input type="text" onChange={handleChange} value={formInputData.email} name="email" placeholder="Enter your Email address" />
          </div>
          <div >
            <input type="submit" onClick={handleSubmit}  />
          </div>

         </div>
         <table>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Full Name</th>
                    <th>Mobile Number</th>
                    <th>Email address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.fullName}</td>
                            <td>{data.mobileNumber}</td>
                            <td>{data.email}</td>
                            <td><button onClick={(e)=> handleDelete(e)}>Delete</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </>
 );
}
export default Maincomponent;