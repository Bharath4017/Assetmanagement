import React, { useState } from 'react';
import AssetApi from '../api/AssetApi';

import { useHistory } from 'react-router-dom';

export default function CreateAsset() {
    let history=useHistory();
    const [serialnumber,setSerialNumber]=useState("")
    const [category,setCategory]=useState("")
    const [assetname,setAssetname]=useState("")
    const [specifications,setSpecifications]=useState("")
    const [manufacturer,setmanufacturer]=useState("")
    const [received_on_date,setreceived_on_date]=useState("")
    const [purchased_on_date,setpurchased_on_date]=useState("")
    const [price,SetPrice]=useState("")
    const [assetstatus,setAssetStatus]=useState("Active")
    const [warrenty,setWarrenty]=useState("")
    const handleSubmit = async (e)=>{
       e.preventDefault()
       window.setTimeout(()=>{
        history.push('/')
         },2000)   
        try{
            await AssetApi.post("/",{
                serialnumber,
                assetname,
                specifications,
                category,
                manufacturer,
                received_on_date,
                purchased_on_date,
                price ,
                assetstatus,
                warrenty
            });
        }catch(err){
           console.log(err) 
        }
    }
    const handleCancel =()=>{
        history.push("/")
    }
  return(
  <div className='container '  >
      <p className='' style={{paddingTop:"80px",marginLeft:"10px",font:"inter",fontWeight:"600"}}>Create Asset</p>
      <form action="form-group was-validated">
            <div className='row p-2 d-flex justify-content-center' style={{backgroundColor:"white" ,height:"75vh" ,width:"90vw",margin:"12px",borderRadius:"15px",boxShadow:"5px 5px 3px lightgrey",borderColor:"lightgray"}}>
                <div className='col-6' style={{width:"486px"}}>
                    <label>Serial Number</label>
                    <input type="text"  value={serialnumber}  name="serialnumber" onChange={e=>setSerialNumber(e.target.value)} className='form-control' placeholder='Serial Number'/>
                </div>
                <div className='col-6' style={{width:"486px"}}>
                    <label>Asset Name</label>
                    <input type="text" value={assetname} onChange={e=>setAssetname(e.target.value)} className='form-control' placeholder='Asset Name'/>
                </div>
                <div className='col-6' style={{width:"486px"}}>
                <label>Asset Type</label><br />
                 <input type="text" value={category} onChange={e=>setCategory(e.target.value)} className='form-control' placeholder='Asset Category'/> 
                </div>
                <div className='col-6' style={{width:"486px"}}> 
                    <label>Specifications</label>
                    <input type="text"  style ={{height:"100px"}} value={specifications} onChange={e=>setSpecifications(e.target.value)} className='form-control' placeholder='Specifications'/>
                </div>
                <div className='col-6' style={{width:"486px"}}>
                    <label>Manufacturer</label>
                    <input type="text" value={manufacturer} onChange={e=>setmanufacturer(e.target.value)} className='form-control' placeholder='Manufacturer'/>
                </div>
                <div className='col-6' style={{width:"486px"}}>
                    <label>Received Date</label>
                    <input type="date"  value={received_on_date} onChange={e=>setreceived_on_date(e.target.value)} className='form-control' placeholder='Manufacturer'/>
                </div>
                <div className='col-6' style={{width:"486px"}}>
                    <label>Purchased Date</label> 
                    <input type="date" value={purchased_on_date} onChange={e=>setpurchased_on_date(e.target.value)} className='form-control' placeholder='Manufacturer'/>
                </div>
                <div className='col-6' style={{width:"486px"}}>
                <label>Price</label>
                    <input type="text" value={price} onChange={e=>SetPrice(e.target.value)} className='form-control' placeholder='Price'/>
                </div>
                <div className='col-6 ' style={{width:"486px"}}>
                <label>Status : </label> &nbsp;
                   <select className='custom-select' value={assetstatus} onChange={(e)=>{
                       const assetStatus =e.target.value;
                       setAssetStatus(assetStatus)
                   }}>
                       <option value="active">Active</option>
                       <option value="inactive">Inactive</option>
                   </select>  
                   <input type="text" value={assetstatus} className='form-control' placeholder='Status'/>
                   
                </div>
                <div className='col-6 ' style={{width:"486px"}}>
                    <label>Warrenty</label> 
                    <input type="date" value={warrenty} onChange={e=>setWarrenty(e.target.value)} className='form-control' placeholder='Manufacturer'/>
                </div>
                <hr />
                <div className='d-flex justify-content-end'>
                    <button type="submit" style={{width:"117px" ,height:"32px",padding:"2px",borderRadius:"20px",backgroundColor:"white",color:"#2f66dd",borderWidth:"1px" ,borderColor:"#2f66dd"}} onClick={handleCancel} className='btn btn-primary'>Cancel</button> &nbsp;
                    <button type="submit" style={{width:"117px" ,height:"32px",padding:"2px",borderRadius:"20px",backgroundColor:"#2f66dd",color:"white",borderWidth:"0px"}} onClick={handleSubmit} >Create Asset</button>
                </div>
            </div>
      </form>   
      {/* <DatePicker
  selected={purchased_on_date}
  onSelect={purchased_on_date} //when day is clicked
  onChange={setpurchased_on_date}
  placeholder="date" //only when value has changed
/> */}
  </div>
  );
}
