import React from 'react';
import {Switch,Route} from 'react-router-dom'
import AssetAllotment from './components/AssetAllotment';
import { updatePage } from './routes/updatePage';
import { Home } from './routes/Home';
import { AssetContextProvider } from './context/AssetContext';
import CreateAsset from './components/CreateAsset';
import Sidemenu from './components/sidebar';
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar';
import LeasedAssetList from './components/LeasedAssetList';
import PurchasedAssets from './components/PurchasedAssets';
import CreateLeasedAsset from './components/CreateLeasedAssets';
import AllocateAssets from './components/Allocate_Assets';
import AssetAllotmentHeader from './components/assetAllotmentHeader';
import AssignAsset from './components/AssignAsset';
import AssignedAssets from './components/AssignedAssets';
import AssignProject from './components/AssignProject';
import './App.css'
import Users from './components/Users';

const App =()=>{
    return (
        <AssetContextProvider>
           <div> 
                <Navbar />
                <Sidemenu />
                <div>
                   <Switch>
                      <Route  component={Home} exact path="/">
                      </Route>
                      <Route exact path='/assets/:id/update' component={updatePage}></Route>
                      <Route exact path='/dashboard' component={Dashboard}></Route>
                      <Route exact path='/assets/createAsset' component={CreateAsset}></Route>
                      <Route exact path='/assets/createLeasedAsset' component={CreateLeasedAsset}></Route>
                      <Route exact path='/leased_Assets' component={LeasedAssetList}></Route>
                      <Route exact path='/Purchased_Assets' component={PurchasedAssets}></Route>
                      <Route exact path='/Asset_Allotmentheader' component={AssetAllotmentHeader}></Route>
                      <Route exact path='/Allocate_assets' component={AllocateAssets}></Route>
                      <Route exact path='/Asset_Allotment' component={AssetAllotment}></Route>
                      <Route exact path='/assignasset' component={AssignAsset}></Route>
                      <Route exact path='/assignproject' component={AssignProject }></Route>
                      <Route exact path='/Assigned_Asset' component={AssignedAssets}></Route>
                      <Route exact path='/Users' component={Users}></Route>
                  </Switch>
                  </div>
          </div>
        </AssetContextProvider>
    )
}
export default (App);