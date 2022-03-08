import React,{useContext,useEffect, useState} from 'react';
import AssignAssetApi from '../api/AssignAssetApi';
import { AssetContext } from '../context/AssetContext';
import AssetAllotmentHeader from './assetAllotmentHeader';
import {FaTrash} from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';
import usersApi from '../api/usersApi';
import moment from 'moment';
import Allocate_Assets from './Allocate_Assets';

export default function AssignAsset() {    
    const {id}=useParams();
    let history = useHistory()
    const [selectedObject,setSelectedObject] = useState(JSON.parse(localStorage.getItem("selectedUser") || "[]"))
    const [selectedAssets,setSelectedAssets] = useState([])

    const [associatename,setAssciatename] = useState("")

    const [associateid,setAssociateid]=useState("")

    const [associateStatus,setassociatestarus]=useState("")

    const [associaterole,setAssociateRole]=useState("")

    const {paginatedPosts,setPaginatedPosts} =useContext(AssetContext) 

    const [isChecked,setIsChecked]=useState(false)


    const [radio ,setRadio]=useState(false)
    const getUnique=(array, key)=> {
        if (typeof key !== 'function') {
          const property = key;
          key = function(item) { return item[property]; };
        }
        return Array.from(array.reduce(function(map, item) {
          const k = key(item);
          if (!map.has(k)) map.set(k, item);
          return map;
        }, new Map()).values());
      }
    useEffect(()=>{
        console.log('Selected Object',selectedObject)
        const fetchData=async()=>{
          try{
            const response= await AssignAssetApi.get("/");
             setPaginatedPosts(response.data.data.testing)
           }catch(err){}
        }
        fetchData();
  },[]) 

  const handleClick =()=>{
    history.push('/Asset_Allotment')
}
  const handleChange =(e, asset)=>{
      const {name,checked}=e.target
      let tempUser =paginatedPosts.map(assets=>assets.serialnumber === name ? {...assets, isChecked : checked} : assets );
       setPaginatedPosts(tempUser)

       setSelectedAssets(asset)
       var NewSelectedObject = selectedObject;
       NewSelectedObject['assets'].push(asset)
       const tmp = new Map()
        const rs = NewSelectedObject['assets'].reduce((acc, e) => {
        if(tmp.has(e.id)) {
            if (!tmp.get(e.id).includes(e.serialnumber)) {
            acc.push(e)
            tmp.set(e.id, [...tmp.get(e.id), e.serialnumber])
            }
        } else {
            acc.push(e)
            tmp.set(e.id, [e.serialnumber])
        }
        return acc
        }, [])
        NewSelectedObject['assets'] = rs
        localStorage.setItem('selectedUser',JSON.stringify(NewSelectedObject));
  }
    return (<div  className=''>
        <AssetAllotmentHeader />
        <Allocate_Assets />
        <table className='table table-hover text-center' style={{backgroundColor:"white",width:"700px",margin:"auto"}}>
               <tbody> 
                    <tr >
                        <td style={{fontSize:"15px"}}><input type="radio"/> &nbsp;{selectedObject.associatename}</td>
                        <td style={{fontSize:"15px"}}>{selectedObject.associaterole}</td>
                        {/* <td style={{fontSize:"15px"}}>{moment(selectedObject.dateofjoining).format('YYYY/MM/DD')}</td> */}
                        <td style={{fontSize:"15px"}}>{selectedObject.associatestatus}</td>
                        <td style={{fontSize:"15px"}}>{selectedObject.email}</td>
                        {/* <td style={{fontSize:"15px"}}>{selectedObject.contactnumber}</td> */}
                        {/* <td style={{fontSize:"15px"}}>{selectedObject.adress}</td> */}
                    </tr>
               </tbody>
           </table> 
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
         <div style={{padding:"10px" ,marginLeft:"120px"}}>
           {isChecked && associateid }
              <table className='table table-hover '>
               <thead>
                   <tr className='' >
                      <th scope="col">Asset Serial No</th>
                      <th scope="col">Asset Name</th>
                      <th scope="col">category</th>
                      <th scope="col">Status</th>
                      <th scope="col">Email ID</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Adress</th>
                      <th scope="col">Actions</th>
                   </tr>
               </thead>
               <tbody> 
                   {paginatedPosts && paginatedPosts.map((assets,index)=>{
                       return(
                        <tr key={index}>
                        <td ><input type="checkbox" name={assets.serialnumber} 
                        checked={assets ?.isChecked || false}
                        value={assets.serialnumber}
                        onChange={e=>handleChange(e, assets)}/> &nbsp;{assets.serialnumber}</td>
                        <td >{assets.assetname}</td>
                        <td >{assets.category}</td>
                        <td >{assets.assetstatus}</td>
                        <td >example123@gmail.com</td>
                        <td >12345689</td>
                        <td >xyz street</td>
                        <td><i className='far fa-edit'></i>&nbsp;
                            <FaTrash />&nbsp;
                            </td>
                        </tr>
                       );
                   })}
               </tbody>
           </table>
             <button className='btn btn-primary' onClick={handleClick}>back</button>&nbsp;
             <button className='btn btn-primary' onClick={()=>history.push("/assignproject")}>next</button>
             </div>
             
  </div>);
}

