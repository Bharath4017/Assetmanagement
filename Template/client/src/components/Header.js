import { Divider } from '@mui/material';
import React,{useState} from 'react';
import './Header.css'
import { useHistory } from 'react-router-dom';



const Header = () => {
  const [style, setStyle] = useState("buttonCard");
  let history=useHistory();


  const handleClick=()=>{
    history.push("/");
    setStyle("buttonCard_2");
  }

  const handleSubmit =()=>{
    history.push('/leased_Assets');
  }
  return (<div className='mb-3'>
      <h5 className='' style={{marginTop:"80px",fontWeight:"700"}} >Asset Inventory</h5>
        <button onClick={handleClick}  style={{backgroundColor:"#e6eaf5"}} className={style}>Purchased Asset</button>
         &nbsp;
        <button onClick={handleSubmit} style={{backgroundColor:"#e6eaf5"}} className="buttonCard">Leased Asset</button>      
      <Divider />      
  </div>);
};
export default Header;