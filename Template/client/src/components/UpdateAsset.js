import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AssetApi from '../api/AssetApi';

import { AssetContext } from '../context/AssetContext';

function UpdateAsset(props) {
    
    const {id}=useParams();
    let history=useHistory();
    const {assets} = useContext(AssetContext)
    const [serialnumber,setSerialnumber]=useState("")
    const [assetname,setName]=useState("")
    const [specifications,setSpecifications]=useState("")
    const [category,setCategory]=useState("")
    const [manufacturer,setManufacturer]=useState("")
    const [received_on_date,setreceived_on_date]=useState("")
    const [purchased_on_date,setpurchased_on_date]=useState("")
    const [price,setPrice]=useState("")
    
    useEffect(()=>{
        const fetchData =async()=>{
            const response =await AssetApi.get(`/${id}`);
            setSerialnumber(response.data.data.assets.serialnumber)
            setName(response.data.data.assets.assetname)
            setSpecifications(response.data.data.assets.specifications)
            setCategory(response.data.data.assets.category)
            setManufacturer(response.data.data.assets.manufacturer)
            setreceived_on_date(response.data.data.assets.received_on_date)
            setpurchased_on_date(response.data.data.assets.purchased_on_date)
            setPrice(response.data.data.assets.price)
        };
    fetchData();
    },[])

    const handleSubmit =async (e)=>{
        e.preventDefault()
        const updatedAsset =await AssetApi.put(`/${id}`,{
            serialnumber,
            assetname,
            specifications,
            category,
            manufacturer,
            received_on_date,
            purchased_on_date,
            price
        });
        history.push("/")
    }
    const handleBack =()=>{
        history.push("/")
    }
  return (
  <div className='container'>
    <p style={{paddingTop:"20px",marginLeft:"10px",font:"inter",fontWeight:"600"}}>Edit Asset</p>
     <form action="">
      <div className='row p-2 d-flex justify-content-center' style={{backgroundColor:"white" ,height:"75vh" ,width:"90vw",margin:"12px",borderRadius:"15px",boxShadow:"5px 5px 3px lightgrey",borderColor:"lightgray"}}>
        <div className='col-6' style={{width:"486px",}}>
            <label htmlFor="name">Serial Number</label>
            <input value={serialnumber} onChange={e=>setSerialnumber(e.target.value)} type="text" id="name" className='form-control'></input>
         </div>
         <div className='col-6' style={{width:"486px"}}>
            <label htmlFor="name">Name</label>
            <input value={assetname} onChange={e=>setName(e.target.value)} type="text" id="name" className='form-control'></input>
         </div>

         <div className='col-6' style={{width:"486px"}}>
            <label htmlFor="specifications">Specifications</label>
            <input value={specifications} onChange={e=>setSpecifications(e.target.value)} type="textarea" id="specifications" className='form-control' style={{height:"6 0px"}}></input>
         </div>
         <div className='col-6' style={{width:"486px"}}>
            <label htmlFor="specifications">Category</label>
            <input value={category} onChange={e=>setCategory(e.target.value)} type="textarea" id="specifications" className='form-control' style={{height:"6 0px"}}></input>
            </div>
         <div className='col-6'style={{width:"486px"}}>
            <label htmlFor="Manufacturer">Manufacturer</label>
            <input value={manufacturer} onChange={e=>setManufacturer(e.target.value)} type="text" id="category" className='form-control'></input>
         </div>
         <div className='col-6'style={{width:"486px"}}>
            <label htmlFor="Received Date">Received Date</label>
            <input value={received_on_date} onChange={e=>setreceived_on_date(e.target.value)} type="date" id="category" className='form-control'></input>
         </div>
         <div className='col-6'style={{width:"486px"}}>
            <label htmlFor="Purchase Date">Purchase Date</label>
            <input value={purchased_on_date} onChange={e=>setpurchased_on_date(e.target.value)} type="date" id="category" className='form-control'></input>
         </div>

         <div className='col-6'style={{width:"486px"}}>
            <label htmlFor="price">Price</label>
            <input value={price} onChange={e=>setPrice(e.target.value)} type="number" id="price" className='form-control'></input>
         </div>

          <hr />
         <div className='d-flex justify-content-end'>
         <button onClick={handleBack} className='btn btn-primary mt-4' style={{width:"117px" ,height:"32px",padding:"2px",borderRadius:"20px",backgroundColor:"white",color:"#2f66dd",borderWidth:"1px" ,borderColor:"#2f66dd"}}  type='submit'>Cancel</button>&nbsp;
         <button onClick={handleSubmit} className='btn btn-primary mt-4' style={{width:"117px" ,height:"32px",padding:"2px",borderRadius:"20px",backgroundColor:"#2f66dd",color:"white",borderWidth:"0px"}} type='submit'>Save</button>
     </div>
         </div>
     </form>
  </div>
  );
}

export default UpdateAsset;
