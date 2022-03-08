import React, { useState, useEffect } from 'react'
import AssetAllotmentHeader from './assetAllotmentHeader';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import mappingassetApi from '../api/mappingassetApi';



function AssignedModel() {
  const [selectedObject,setSelectedObject] = useState(JSON.parse(localStorage.getItem("selectedUser") || "[]"))
  const [selectedAssets,setSelectedAssets] = useState(selectedObject['assets'])
  const [selectedProjects,setSelectedProjects] = useState(selectedObject['projects'])
  console.log('Selected Object',selectedObject)
    let history = useHistory()
    useEffect( ()=>{ 
        console.log(selectedObject)  
        console.log(selectedObject.id)   
        // console.log(selectedAssets.map(assets=>assets.assetname))
       // console.log(selectedProjects[0].project_id)
        let assetserielnumber=selectedAssets.map(assets=>assets.assetname)
        let [serial,...rest]=selectedAssets.map(assets=>assets.serialnumber)
        console.log(serial)
        console.log(rest)
  },[]) 
  const handleSubmit=async()=>{
    try {
       const result= await mappingassetApi.post("/",{
             users_id:selectedObject.id,
             username:selectedObject.associatename ,
             userrole:selectedObject.associaterole ,
             date_of_joining:selectedObject.dateofjoining ,
             assetserielnumber:selectedAssets.map(assets=>assets.serialnumber),
             assetstatus:selectedAssets.map(assets=>assets.assetstatus),
        })
        console.log(result.data.data.mappingassets)
        window.localStorage.clear(); 
   history.push("/Assigned_Asset")

    }catch (err){
        console.log(err)
    }
}
  return (
    <div style={{}} >
              <table className=' table-hover '>
               <thead>
                   {/* <tr className='' >
                      <th scope="col">Associate_ID</th>
                      <th scope="col">Associate Name</th>
                      <th scope="col">Role</th>
                      <th scope="col">Date of Joining</th>
                      <th scope="col">Status</th>
                      <th scope="col">Email ID</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Adress</th>
                   </tr> */}
               </thead>
               <tbody> 
                    <tr  style={{borderStyle:"solid",borderWidth:"3px"}}>
                    <td style={{fontSize:"15px",color:"blue"}}>{selectedObject.id}</td>
                        <td style={{fontSize:"15px"}}>{selectedObject.associatename}</td>
                        <td style={{fontSize:"15px"}}>{selectedObject.associaterole}</td>
                        <td style={{fontSize:"15px"}}>{moment(selectedObject.dateofjoining).format('YYYY/MM/DD')}</td>
                        <td style={{fontSize:"15px"}}>{selectedObject.associatestatus}</td>
                        {/* <td style={{fontSize:"15px"}}>{selectedObject.email}</td> */}
                        {/* <td style={{fontSize:"15px"}}>{selectedObject.contactnumber}</td> */}
                        {/* <td style={{fontSize:"15px"}}>{selectedObject.adress}</td> */}
                    </tr>
               </tbody>
              </table>
              <h5 style={{marginTop:"20px"}}>Assigned Assets List</h5>
               {/* <thead>
                   <tr className='' >
                      <th scope="col">Asset Serial No</th>
                      <th scope="col">Asset Name</th>
                      <th scope="col">category</th>
                      <th scope="col">Status</th>
                      <th scope="col">Email ID</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Adress</th>
                   </tr>
               </thead> */}
                   {selectedAssets && selectedAssets.map((assets,index)=>{
                       return(
                       <div>
                           <div style={{backgroundColor:"#F4F4F4",height:"73px",marginTop:"3px",borderRadius:"10px",padding:"10px"}}>
                           {assets.serialnumber} <br />
                           {assets.assetname} 
                            </div>
                        </div>
                        // <td >{assets.category}</td>
                        // <td >{assets.assetstatus}</td>
                        // <td >{assets.email}</td>
                        // <td >{assets.contactnumber}</td>
                        // <td >{assets.adress}</td>
                       );
                   })}
           <h5 style={{marginTop:"30px"}}>Project Details </h5>
      {/* <thead>
          <tr className='' >
             <th scope="col">Project Serial No</th>
             <th scope="col">Project Name</th>
             <th scope="col">category</th>
             <th scope="col">Status</th>
             <th scope="col">Email ID</th>
             <th scope="col">Contact Number</th>
             <th scope="col">Adress</th>
             <th scope="col">Actions</th>
          </tr>
      </thead> */}
          {selectedProjects && selectedProjects.map(projects=>{
              return(
                        <div style={{backgroundColor:"#F4F4F4",height:"73px",marginTop:"3px",borderRadius:"10px",padding:"10px"}}>
                         {projects.project_id} <br/>
                         {projects.projectname }
                        </div>
            //     <td >{projects.projecttype }</td>
            //    <td >{projects.allocated_date}</td>
            //    <td >{projects.projectstatus }</td>
            //    <td >{projects. manageremail }</td>
            //    <td >{projects.remoteorpremises}</td>
            //    <td >{projects.adress}</td> 
              );
          })}
        {/* <h1>Assigned Assets</h1>
        <div className='d-flex flex-row justify-content-center mt-5' >
             <div className='d-flex flex-row' >
              <form >
             <input type="text" 
             placeholder='...search...' 
             style={{borderRadius:"20px 0px 0px 20px",height:"30px"}}/>
              <button style={{borderRadius:"0px 20px 20px 0px",height:"30px",borderWidth:"0px 0px 0px 0px"}} className=''><i className="fa fa-search" /></button>
              &nbsp;
             <button  style={{borderRadius:"25px"}} className='btn btn-primary '>Reset</button>
             </form> &nbsp;
             <button style={{borderRadius:"20px"}} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Status</button>
             </div>
         </div>
        <table className='table table-hover '>
               <thead>
                   <tr className='' >
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Role</th>
                      <th scope="col">Date of Joining</th>
                      <th scope="col">Status</th>
                      <th scope="col">Email ID</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Adress</th>
                      <th scope="col">Actions</th>
                   </tr>
               </thead>
        </table> */}<br />

     <button className='btn btn-primary'  onClick={handleSubmit}>Submit</button> 
    </div>
  )
}
export default AssignedModel;