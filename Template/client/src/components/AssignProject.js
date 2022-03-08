import React ,{useContext,useEffect, useState} from 'react'
import AssetAllotmentHeader from './assetAllotmentHeader';
import { AssetContext } from '../context/AssetContext';
import AssignprojectApi from '../api/AssignprojectApi';
import { useHistory} from 'react-router-dom';
import moment from 'moment';
import { Modal,Button } from 'react-bootstrap';
import AssignedModel from './AssignedModel';
import Allocate_Assets from './Allocate_Assets';


 
function AssignProject() {
     
    const [selectedObject,setSelectedObject] = useState(JSON.parse(localStorage.getItem("selectedUser") || "[]"))
    const [selectedAssets,setSelectedAssets] = useState(selectedObject['assets'])
    const [selectedProjects,setSelectedProjects] = useState([])
    const [show,setShow]=useState(false)
    const {paginatedPosts,setPaginatedPosts} =useContext(AssetContext) 
    let history =useHistory();
    useEffect(()=>{
        
        const fetchData=async()=>{
          try{ 
            const response= await AssignprojectApi.get("/");
              setPaginatedPosts(response.data.data.projects)
           }catch(err){}
        }
      fetchData();
  },[])

  const handleChange =(e, project)=>{
    //const {name,checked}=e.target
    //let tempUser =paginatedPosts.map(projects=>projects.serialnumber === name ? {...projects, isChecked : checked} : projects );
     //setPaginatedPosts(tempUser)
     e.preventDefault();
     console.log('Selected Project', project)
    setSelectedProjects(project)
     var NewSelectedObject = selectedObject;
     NewSelectedObject['projects'].push(project)
     const tmp = new Map()
      const rs = NewSelectedObject['projects'].reduce((acc, e) => {
      if(tmp.has(e.project_id)) {
          if (!tmp.get(e.project_id).includes(e.projectname)) {
          acc.push(e)
          tmp.set(e.project_id, [...tmp.get(e.project_id), e.projectname])
          }
      } else {
          acc.push(e)
          tmp.set(e.project_id, [e.projectname])
      }
      return acc
      }, [])
      NewSelectedObject['projects'] = rs
      localStorage.setItem('selectedUser',JSON.stringify(NewSelectedObject));
}
  const handleShow=()=>setShow(true)

  const handleClose=()=>setShow(false)

  return (
    <div>
         <AssetAllotmentHeader />
         <Allocate_Assets />
         <table className='table table-hover ' style={{backgroundColor:"white",width:"700px",margin:"auto"}}>
               <tbody> 
                    <tr >
                        <td>{selectedObject.associatename}</td>
                        <td>{selectedObject.associaterole}</td>
                        <td>{moment(selectedObject.dateofjoining).format('YYYY/MM/DD')}</td>
                        <td>{selectedObject.associatestatus}</td>
                        {/* <td style={{fontSize:"15px"}}>{selectedObject.email}</td> */}
                        {/* <td style={{fontSize:"15px"}}>{selectedObject.contactnumber}</td> */}
                        {/* <td style={{fontSize:"15px"}}>{selectedObject.adress}</td> */}
                    </tr>
               </tbody>
           </table> 
           <table className='table' style={{backgroundColor:"white",width:"700px",margin:"auto"}}>
               <tbody> 
                   {selectedAssets && selectedAssets.map((assets,index)=>{
                       return(
                        <tr key={index}> 
                        <td >{assets.serialnumber}</td>                      
                        <td >{assets.assetname}</td>
                        <td >{assets.category}</td>
                        <td >{assets.assetstatus}</td>
                        {/* <td >{assets.email}</td> */}
                        {/* <td >{assets.contactnumber}</td> */}
                        {/* <td >{assets.adress}</td> */}
                        </tr>
                       );
                   })}
               </tbody>
           </table>
         <div className='d-flex flex-row justify-content-center ' >
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
         <div style={{padding:"10px" ,marginLeft:"120px"}}>
     <table className='table table-hover '>
      <thead>
          <tr className='' >
             <th scope="col">Project Serial No</th>
             <th scope="col">project Name</th>
             <th scope="col">category</th>
             <th scope="col">Status</th>
             <th scope="col">Email ID</th>
             <th scope="col">Contact Number</th>
             <th scope="col">Adress</th>
             <th scope="col">Actions</th>
          </tr>
      </thead>
      <tbody> 
          {paginatedPosts && paginatedPosts.map(projects=>{
              return(
               <tr key={projects.project_id}>
               <td ><input type="checkbox" name={projects.project_id} onChange={e=>handleChange(e, projects)}
               /> &nbsp;{projects.project_id}</td>
               <td >{projects.projectname }</td>
               <td >{projects.projecttype }</td>
               <td >{projects.allocated_date}</td>
               <td >{projects.projectstatus }</td>
               <td >{projects. manageremail }</td>
               <td >{projects.remoteorpremises}</td>
               <td >{projects.adress}</td>
               </tr>
              );
          })}
      </tbody>
  </table>
    <button className='btn btn-primary' onClick={()=>history.push("/assignasset")}>back</button>&nbsp;
    <Button className='btn btn-primary' onClick={handleShow}>Preview</Button>
    </div>
    <Modal show={show} onHide={handleClose} style={{paddingTop:"40px"}} size="lg">
        <Modal.Header closeButton>
            <Modal.Title>
                Assets Preview 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AssignedModel />
        </Modal.Body>
        <Modal.Footer>
                 <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="secondary" >
                    Submit
                </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}
export default AssignProject