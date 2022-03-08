import React from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,AreaChart,Tooltip,Area}  from 'recharts'

function AreaChartComponent() {
    const pdata=[
        {
          name:"Jan",
          student:13,
          fees:10
        },
        {
         name:"Feb",
         student:3,
         fees:20
       },
       {
         name:"March",
         student:10,
         fees:5
       }
      ]
  return (
    <div className="d-flex flex-column justify-content-end" style={{marginLeft:"125px",width:"282px",height:"150px",backgroundColor:"red",padding:"2px"}} >
        <div >
            <p style={{padding:"0px",margin:"0px"}}>80</p>
            <p style={{padding:"0px",margin:"0px",color:"#0898E9"}}>Laptops</p>
        </div>
     <div>
     <AreaChart width={272} height={100} data={pdata}
      margin={{ right: 30,left :13}}>
 <defs>
   <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
     <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
   </linearGradient>
   <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
     <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
     <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
   </linearGradient>
   <linearGradient id="colorfees" x1="0" y1="0" x2="0" y2="1">
     <stop offset="5%" stopColor="#800080" stopOpacity={0.8}/>
     <stop offset="95%" stopColor="#800080" stopOpacity={0}/>
   </linearGradient>
 </defs>
 <XAxis dataKey="name" interval={'preserveStartEnd'}/>
 <Tooltip />
 <Area type="monotone" dataKey="name" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
 <Area type="monotone" dataKey="student" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
 <Area type="monotone" dataKey="fees" stroke="#800080" fillOpacity={1} fill="url(#colorfees)" />
</AreaChart>
     </div>
    </div>
  )
}

export default AreaChartComponent;