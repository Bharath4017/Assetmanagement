import React, { useContext, useState } from 'react';
import AssetApi from '../api/AssetApi';
import { AssetContext } from '../context/AssetContext';
import { useHistory } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import AssetApiLeased from '../api/AssetApiLeased';


export default function CreateLeasedAsset() {

    let history=useHistory();
    const {addAssets}=useContext(AssetContext);
    const [serialnumber,setSerialNumber]=useState("")
    const [category,setCategory]=useState("")
    const [assetname,setAssetname]=useState("")
    const [specifications,setSpecifications]=useState("")
    const [manufacturer,setmanufacturer]=useState("")
    const [received_on_date,setreceived_on_date]=useState("")
    const [purchased_on_date,setpurchased_on_date]=useState("")
    const [price,SetPrice]=useState("")

    

    const handleSubmit = async (e)=>{
       e.preventDefault()
       history.push("/leased_Assets");
        try{
            const response=  await AssetApiLeased.post("/",{
                serialnumber,
                assetname,
                specifications,
                category,
                manufacturer,
                received_on_date,
                purchased_on_date,
                price 
            });
            addAssets(response.data.data.assets)
            console.log(response);
        }catch(err){
            
        }
    }
    const handleCancel =()=>{
        history.push("/leased_Assets")
    }
   

  return(
      
      
  <div className='container' >
   
      <h1 className='text-center' style={{paddingTop:"80px"}}>Create Asset</h1>
      <form action="form-group" >
            <div className='row p-2'>
                <div className='col-6'>
                    <label>Serial Number</label>
                    <input type="text"  value={serialnumber}  name="serialnumber" onChange={e=>setSerialNumber(e.target.value)} className='form-control' placeholder='Serial Number'/>
                </div>
                <div className='col-6'>
                    <label>Asset Name</label>
                    <input type="text" value={assetname} onChange={e=>setAssetname(e.target.value)} className='form-control' placeholder='Asset Name'/>
                </div>
                <div className='col-6'>
                <label>Asset Type</label><br />
                    <input type="text" value={category} onChange={e=>setCategory(e.target.value)} className='form-control' placeholder='Asset Name'/>
                </div>
                <div className='col-6'>
                    <label>Specifications</label>
                    <input type="text" value={specifications} onChange={e=>setSpecifications(e.target.value)} className='form-control' placeholder='Specifications'/>
                </div>
                <div className='col-6'>
                    <label>Manufacturer</label>
                    <input type="text" value={manufacturer} onChange={e=>setmanufacturer(e.target.value)} className='form-control' placeholder='Manufacturer'/>
                </div>
                <div className='col-6'>
                    <label>Received Date</label>
                    <input type="date"  value={received_on_date} onChange={e=>setreceived_on_date(e.target.value)} className='form-control' placeholder='Manufacturer'/>
                </div>
                <div className='col-6'>
                    <label>Purchased Date</label> 
                    <input type="date" value={purchased_on_date} onChange={e=>setpurchased_on_date(e.target.value)} className='form-control' placeholder='Manufacturer'/>
                </div>
                <div className='col-6'>
                <label>Price</label>
                    <input type="text" value={price} onChange={e=>SetPrice(e.target.value)}className='form-control' placeholder='Price'/>
                </div>
                <div className='col-6 mt-3'>
                    <button type="submit" onClick={handleSubmit} className='btn btn-primary'>Create Asset</button>&nbsp;
                    <button type="submit" onClick={handleCancel} className='btn btn-primary'>Cancel</button>
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
