import React ,{useState} from 'react';
import { Divider } from '@mui/material';
import { useHistory } from 'react-router-dom'; 
import AllocateAssets from './Allocate_Assets';
import './Header.css';






function AssetAllotmentHeader() {

  let history=useHistory()

  const [style, setStyle] = useState("buttonCard");

const handleClick =()=>{
  history.push('/Asset_Allotment')
}
 const handleSubmit =()=>{
   history.push('/Assigned_Asset');
   setStyle("buttonCard_2");
 }

  return (<div style={{paddingTop:"80px",marginLeft:"125px"}}>
      <h5 className='' style={{marginTop:"20px",fontWeight:"700"}} >Asset Allotment </h5>
        <button  onClick={handleClick} className='buttonCard' style={{backgroundColor:"#e6eaf5"}}>Allocate Asset</button>
         &nbsp;
        <button  onClick={handleSubmit} className={style} style={{backgroundColor:"#e6eaf5"}}>Assigned Asset</button>      
      <Divider /> 
  </div>);
}
export default AssetAllotmentHeader;
