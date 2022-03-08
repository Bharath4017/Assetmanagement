import React from 'react';
import AreaChartComponent from './AreaChart';
import LineChart from './LineChart';



function Dashboard() {


  return <div style={{paddingTop:"80px"}}>
     <h1 className='text-center'>Dashboard</h1>
     <AreaChartComponent />
     <LineChart />
  </div>;
}

export default Dashboard;
