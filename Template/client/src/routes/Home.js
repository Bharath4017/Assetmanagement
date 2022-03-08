import React from 'react';
import Header from '../components/Header';
import AssetList from '../components/AssetList';



export const Home = () => {
  return (
  <div >
    <div style={{marginLeft:"120px",padding:"10px"}}>
    <Header />
    <AssetList />
    </div>
  </div>
  )
};
