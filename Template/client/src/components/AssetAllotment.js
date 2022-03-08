import React,{useContext,useEffect, useState} from 'react';
import usersApi from '../api/usersApi';
import { AssetContext } from '../context/AssetContext';
import AssetAllotmentHeader from './assetAllotmentHeader';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Allocate_Assets from './Allocate_Assets';
import reset from './images/reset.png';
import {FaTrash} from 'react-icons/fa';
export default function AssetAllotment() {

    let history = useHistory()

    const {paginatedPosts,setPaginatedPosts} =useContext(AssetContext) 

    const [users_id,setUser]=useState(2)
  
    const  handlePost = (user)=>{
        user['assets']=[];
        user['projects']=[];
        localStorage.setItem('selectedUser',JSON.stringify(user));
        //const sUser = JSON.parse(localStorage.getItem("selectedUser") || "[]");
        //console.log('Select User',sUser)           
    }
    
      
    useEffect(()=>{
        const fetchData=async()=>{
          try{
              const response= await usersApi.get("/");
              setPaginatedPosts(response.data.data.users)
             
           }catch(err){}
           
        }
      fetchData();
  },[]) 

  const handleSubmit =async(e)=>{
     e.preventDefault()
 
   history.push("/assignasset")
   //history.push(`/users/${id}/assignasset`)
  }
    return (<div  className=''>
        <AssetAllotmentHeader />
        <Allocate_Assets />
        <div className='d-flex flex-row justify-content-center mb-3'>
             <div className='d-flex flex-row'>
                 <form  >
             <input type="text" 
            // value={name}  
            // onChange={e=>setName(e.target.value)} 
             placeholder='...search...' 
             style={{borderRadius:"20px 0px 0px 20px",height:"30px",width:"264px",borderWidth:"0px",color:"#8626C3"}}
             />
              <button style={{borderRadius:"0px 20px 20px 0px",height:"30px",borderWidth:"0px 0px 0px 0px"}} className=''><i className="fa fa-search"/></button>
              &nbsp;
             </form> &nbsp;
                <select placeholder="status"  className="Form_Filter_Dropdown">
                   <option value="status">status</option>
                   <option value="Active">Active</option>
                   <option value="Inactive">Inactive</option>
                </select>&nbsp;
                <button className='Form_Btn_Reset'><span className='Reset'>Reset</span> &nbsp;<img src={reset}/></button>
             </div>
             {/* <button className='btn btn-primary' style={{borderRadius:"25px",height:"34px",width:"156px",padding:"2px",backgroundImage:"linear-gradient(to right ,#8417FF,#1FA3D2)"}}>Create Asset</button> */}
         </div>
        
         <div style={{padding:"10px" ,marginLeft:"120px"}}>
              <table className='table table-hover '>
               <thead>
                   <tr className='' >
                      <th scope="col">Associate_ID</th>
                      <th scope="col">Associate Name</th>
                      <th scope="col">Role</th>
                      <th scope="col">Date of Joining</th>
                      <th scope="col">Status</th>
                      <th scope="col">Email ID</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Adress</th>
                   </tr>
               </thead>
               <tbody> 
                   {paginatedPosts && paginatedPosts.map(users=>{
                       return(
                        <tr key={users.id}>
                        <td style={{fontSize:"15px"}}>
                            <input value={users.id} name="users" type="radio" onChange={e=>handlePost(users)} /> &nbsp;
                            {users.id}</td>
                        <td>{users.associatename}</td>
                        <td>{users.associaterole}</td>
                        <td>{moment(users.dateofjoining).format('YYYY/MM/DD')}</td>
                        <td>{users.associatestatus}</td>
                        <td>{users.email}</td>
                        <td>{users.contactnumber}</td>
                        <td>{users.adress}</td>
                        </tr>
                       );
                   })}
               </tbody>
           </table>
             <button className='btn btn-primary' onClick={handleSubmit}>Next</button>
             </div>
  </div>);
}

