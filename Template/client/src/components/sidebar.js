import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Divider } from '@mui/material';
import { useHistory,withRouter } from 'react-router-dom';

const useStyles = makeStyles({
    Sidemenu:{
        display:"flex",
        flexDirection:"column",
        position: "absolute",
        left: '0px',
        width: '115px',
        height: '100vh',
        backgroundColor:'white',
        paddingTop:"70px",
        boxShadow:"3px 5px 5px lightgrey",
    },
    sidemenuCard:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"10px",
        borderLeft: "solid 0px #cccccc",
    }
})

function Sidemenu({history}) {

    console.log(history)

    const getColor =(curr)=>{
        if (history.location.pathname===curr){
            return '#224BC4'
        }
    }
    let ehistory=useHistory();

    const  classes = useStyles()  

    const handleTouch =(e)=>{
        ehistory.push('/dashboard');
    }
    const handleSubmit =()=>{
        ehistory.push('/');
    }
    const handleAsset=()=>{
        ehistory.push('/Asset_Allotment')
    }
    return (
        <div className={classes.Sidemenu}>
           <div className={classes.sidemenuCard} onClick={handleTouch} >
           <svg width="44" height="44" viewBox="0 0 44 44" fill="grey" xmlns="http://www.w3.org/2000/svg">
           <path d="M35.2 9.167H8.8c-.389 0-.762.157-1.037.436-.275.28-.43.658-.43 1.053V31.51c0 .395.155.774.43 1.054S8.41 33 8.8 33h26.4c.389 0 .762-.157 1.037-.436.275-.28.43-.659.43-1.054V10.656c0-.395-.155-.774-.43-1.053a1.455 1.455 0 0 0-1.037-.436zm0 1.49v2.978H8.8v-2.979h26.4zM8.8 31.51V15.125h26.4V31.51H8.8zm1.467-19.364a.737.737 0 0 1 .453-.688.724.724 0 0 1 .799.161.748.748 0 0 1 .159.812.743.743 0 0 1-.27.334.726.726 0 0 1-.926-.093.75.75 0 0 1-.215-.526zm6.6 5.958a5.077 5.077 0 0 0-2.852.879 5.197 5.197 0 0 0-1.89 2.34c-.39.952-.491 2-.293 3.012a5.24 5.24 0 0 0 1.405 2.67 5.11 5.11 0 0 0 2.628 1.426 5.06 5.06 0 0 0 2.966-.297 5.15 5.15 0 0 0 2.304-1.92 5.272 5.272 0 0 0-.64-6.581 5.099 5.099 0 0 0-3.628-1.529zm3.593 4.469H17.6v-2.905c.704.148 1.35.501 1.858 1.018a3.753 3.753 0 0 1 1.002 1.887zm-3.593 4.469c-.91 0-1.787-.342-2.462-.96a3.767 3.767 0 0 1-.495-4.972 3.662 3.662 0 0 1 2.223-1.442v4.395h4.327c-.17.84-.62 1.595-1.275 2.138a3.639 3.639 0 0 1-2.318.84zm8.066-2.98H26.4v4.47h-1.467v-4.47zm2.934-2.979h1.466v7.448h-1.466v-7.448zm2.933-2.979h1.467v10.427H30.8V18.104z" 
           fill={getColor('/dashboard')}/>
           </svg>
                <p style={{fontSize:"12px",fontWeight:"500", padding:"0px",color:getColor('/dashboard')}}>Asset Dashboard</p>
            </div >
           <Divider />
            <div className={classes.sidemenuCard} onClick={handleSubmit} >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="grey" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.264 36.667H31.32c.93 0 1.68-.745 1.68-1.662V12.493a1.67 1.67 0 0 0-1.68-1.661H29.29c-.735-.789-1.829-1.194-3.26-1.194h-.552a3.395 3.395 0 0 0-1.425-1.785c-.536-.33-1.25-.514-2.01-.52-.769.006-1.483.19-2.02.522a3.384 3.384 0 0 0-1.427 1.783h-.55c-1.43 0-2.524.405-3.259 1.194h-2.105c-.928 0-1.681.745-1.681 1.661v22.512c0 .918.752 1.662 1.68 1.662h1.584zm1.857-24.588c.374-.408 1.02-.616 1.923-.616h2.126l.064-.846c.002-.036.019-.116.032-.169.089-.44.35-.808.735-1.045.248-.153.625-.241 1.04-.244.407.003.787.09 1.032.243.385.238.647.606.736 1.038.016.085.03.152.033.177l.062.846h2.125c.913 0 1.565.21 1.935.627.13.147.214.309.272.47H15.836c.062-.165.149-.332.285-.481zm-3.16.287h1.012a3.765 3.765 0 0 0-.086 1.22l.1.798h16.1l.103-.798c.013-.09.057-.595-.086-1.22h.935v22.766H12.961V12.367z" 
              fill={getColor('/')}/>
              <path d="M22.914 10.835a.897.897 0 0 0-.903-.892.897.897 0 0 0-.902.892c0 .493.405.892.902.892.5 0 .903-.4.903-.892zM19.427 18.777h8.77c.137 0 .248-.11.248-.244v-1.186a.245.245 0 0 0-.248-.243h-8.77a.245.245 0 0 0-.248.243v1.186c0 .134.11.244.248.244zM17.015 17.103h-1.211a.246.246 0 0 0-.248.244v1.186c0 .134.111.243.248.243h1.211c.137 0 .247-.109.247-.243v-1.186a.245.245 0 0 0-.247-.244zM19.427 23.023h8.77a.244.244 0 0 0 .248-.243v-1.186a.245.245 0 0 0-.248-.243h-8.77a.245.245 0 0 0-.248.243v1.186c0 .136.11.243.248.243zM17.015 21.351h-1.211a.246.246 0 0 0-.248.243v1.186c0 .136.111.243.248.243h1.211a.244.244 0 0 0 .247-.243v-1.186a.244.244 0 0 0-.247-.243zM19.427 27.272h8.77a.245.245 0 0 0 .248-.243v-1.186a.245.245 0 0 0-.248-.244h-8.77a.245.245 0 0 0-.248.244v1.186c0 .134.11.243.248.243zM17.015 25.6h-1.211a.245.245 0 0 0-.248.243v1.186c0 .134.111.243.248.243h1.211a.245.245 0 0 0 .247-.243v-1.186a.244.244 0 0 0-.247-.244zM24.988 31.276V30.09a.246.246 0 0 0-.248-.244h-5.313a.246.246 0 0 0-.248.244v1.186c0 .134.11.244.248.244h5.313c.138 0 .248-.11.248-.244zM17.015 29.846h-1.211a.247.247 0 0 0-.248.244v1.186c0 .134.111.244.248.244h1.211c.137 0 .247-.11.247-.244V30.09a.246.246 0 0 0-.247-.244z" 
              fill={getColor('/')}/>
             </svg>
               <p style={{fontSize:"12px",fontWeight:"500", padding:"0px",color:getColor('/')}}>Asset Inventory</p>
            </div>
            <Divider />
            <div className={classes.sidemenuCard} onClick={handleAsset} >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="grey" xmlns="http://www.w3.org/2000/svg">
             <path d="M30.408 26.694h-8.645a.817.817 0 0 0-.803.802c0 .433.37.803.803.803h8.645c.433 0 .803-.37.803-.803a.817.817 0 0 0-.803-.802zM30.408 22.525h-8.645a.817.817 0 0 0-.803.803c0 .432.37.803.803.803h8.645c.433 0 .803-.37.803-.803a.817.817 0 0 0-.803-.803zM30.408 30.862h-8.645a.817.817 0 0 0-.803.803c0 .432.37.802.803.802h8.645c.433 0 .803-.37.803-.802a.817.817 0 0 0-.803-.803z" 
             fill={getColor('/Asset_Allotment')}/>
             <path d="m35.349 18.202-5.558-5.558a2.098 2.098 0 0 0-1.513-.617H24.82c-1.05-2.748-3.675-4.693-6.793-4.693-3.983-.031-7.256 3.21-7.256 7.225a7.2 7.2 0 0 0 1.605 4.539l-3.489 3.489a.82.82 0 0 0 .556 1.39.83.83 0 0 0 .556-.248l3.489-3.489a7.472 7.472 0 0 0 2.655 1.359v12.937c0 1.173.957 2.13 2.13 2.13h15.532c1.173 0 2.13-.956 2.13-2.13v-14.82c.062-.588-.185-1.112-.586-1.514zm-5.712-3.458 3.612 3.613h-3.088a.541.541 0 0 1-.524-.525v-3.088zm-11.61-5.836a5.653 5.653 0 0 1 5.65 5.65 5.653 5.653 0 0 1-5.65 5.651 5.653 5.653 0 0 1-5.65-5.65 5.653 5.653 0 0 1 5.65-5.65zm15.84 26.122H18.305a.52.52 0 0 1-.525-.525v-12.69h.247a7.248 7.248 0 0 0 7.256-7.256c0-.309-.031-.649-.062-.957h2.81V17.8c0 1.173.957 2.13 2.13 2.13h4.2v14.543a.504.504 0 0 1-.494.556z" 
             fill={getColor('/Asset_Allotment')}/>
             <path d="M18.027 14.065a1.76 1.76 0 1 0 0-3.52 1.76 1.76 0 0 0 0 3.52zM15.68 17.863c1.143.061 3.551.061 4.694 0 .309 0 .556-.31.494-.618l-.155-1.019c-.092-.833-.74-1.513-1.513-1.698l-.802 1.976-.186-1.42h.124a.133.133 0 0 0 .123-.124v-.401a.133.133 0 0 0-.123-.124h-.618a.133.133 0 0 0-.123.124v.37c0 .062.062.124.123.124h.124l-.185 1.42-.803-1.976a1.974 1.974 0 0 0-1.513 1.698l-.155 1.02c-.03.339.186.617.494.648z"
              fill={getColor('/Asset_Allotment')}/>
             </svg>
               <p style={{fontSize:"12px",fontWeight:"500", padding:"0px",color:getColor('/Asset_Allotment')}}>Asset Allotment</p>
            </div>
            <Divider />
            <div className={classes.sidemenuCard} onClick={()=>history.push("/Users")}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.175 18.092c0 1.927-1.427 3.328-3.18 3.33-1.78-.014-3.202-1.41-3.202-3.33 0-1.766 1.42-3.222 3.199-3.222 1.761 0 3.183 1.454 3.183 3.222zm3.842 11.039H14.95a.426.426 0 0 1-.078-.007.46.46 0 0 1-.011-.114c0-.24.104-.683.394-1.24a6.67 6.67 0 0 1 1.305-1.714c1.173-1.122 2.96-2.079 5.431-2.079 2.462 0 4.25.956 5.426 2.08a6.696 6.696 0 0 1 1.308 1.713c.291.559.396 1 .396 1.24 0 .059-.007.093-.012.111a.384.384 0 0 1-.093.01zm.086.006.001-.001v.001zM16.906 20.328c0 1.27-.934 2.176-2.071 2.178-1.158-.01-2.088-.914-2.088-2.178 0-1.154.928-2.103 2.086-2.103 1.144 0 2.073.947 2.073 2.102zm-4.692 7.67-.008.014H9.95c.025-.151.096-.386.249-.68.191-.369.487-.784.892-1.172.76-.726 1.898-1.355 3.46-1.423-.354.34-.674.721-.957 1.097a17.316 17.316 0 0 0-1.036 1.575l-.25.427-.094.163zm-2.272.162v-.003.003zM27.166 20.328c0 1.27.935 2.176 2.072 2.178 1.158-.01 2.087-.914 2.087-2.178a2.094 2.094 0 0 0-2.085-2.103c-1.144 0-2.073.947-2.073 2.102zm4.693 7.67a.654.654 0 0 1 .008.014h2.256a2.4 2.4 0 0 0-.25-.68 4.567 4.567 0 0 0-.892-1.172c-.759-.726-1.897-1.355-3.46-1.423.354.34.675.721.957 1.097.416.553.767 1.119 1.037 1.575a49.886 49.886 0 0 1 .344.59zm2.272.162v-.003.003z" stroke="#929292" stroke-width="1.4"/>
             </svg>
               <p style={{fontSize:"12px", padding:"0px"}}>users</p>
            </div>
            <Divider />
        </div>
    )
}
export default withRouter(Sidemenu);
