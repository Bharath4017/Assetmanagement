import React from 'react';
import AssetList from './AssetList';


export default function PurchasedAssets() {
  return (
    <div style={{paddingTop:"10px"}} className='container'>
        <h1>Purchased Assets</h1>
      <AssetList />
    </div>
  );
}
