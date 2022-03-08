import React ,{useState,createContext} from 'react';

export   const AssetContext = createContext();

export  const AssetContextProvider=props=>{
    const [assets,setAssets]=useState([])
    const [paginatedPosts,setPaginatedPosts] =useState();
    const [currentPage,setCurrentPage]=useState(1)
    const [assetname,setAssetname]=useState([])
    const {user,setUsers}=useState();
 

    const addAssets=(asset)=>{
        setAssets([...assets,...paginatedPosts,asset]);
    }
 
    return (
        <AssetContext.Provider value={{assets,setAssets,addAssets,paginatedPosts,setPaginatedPosts,currentPage,setCurrentPage,assetname,setAssetname,user,setUsers}}>
            {props.children}
        </AssetContext.Provider>
    )
}