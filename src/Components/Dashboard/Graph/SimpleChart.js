
import React, { useState } from 'react'
import './SimpleChart.css'
import {ComposedChart,XAxis,YAxis,Tooltip,Legend,CartesianGrid,Area,Bar,Line} from 'recharts'
import Btn from './graphbutton/Btn';
const day= [
  {
    name: 'Monday',
    sale: 4000,  
  },
  {
    name: 'Tuseday',
    sale: 3000,

  },
  {
    name: 'Wedenesday',
     sale: 2000,

  },
  {
    name: 'Thursday',
    sale: 2780,
  },
  {
    name: 'Friday',
    sale: 1890,
  },
  {
    name: 'Saturday',
    sale: 2390,
  },
  {
    name: 'Sunday',
    sale: 3490,
  },
];
const monthly = [
  {
    name: 'Jan',
    sale: 4000,  
  },
  {
    name: 'Febrary',
    sale: 3000,

  },
  {
    name: 'March',
     sale: 2000,

  },
  {
    name: 'April',
    sale: 2780,
  },
  {
    name: 'May',
    sale: 1890,
  },
  {
    name: 'June',
    sale: 2390,
  },
  {
    name: 'July',
    sale: 3490,
  },
  {
    name: 'August',
    sale: 3490,
  },
  {
    name: 'Sep',
    sale: 3490,
  },
  {
    name:'Oct',
    sale:3744,
  },
  {
    name:'Nov',
    sale:3744,
  },
  {
    name:'Dec',
    sale:3555,
  }
];
const yearly=[
  {
    name: 2015,
    sale: 3490,
  },
  {
    name: 2016,
    sale: 3490,
  },
  {
    name: 2017,
    sale: 3490,
  },
  {
    name:2018,
    sale:3844,
  },
  {
    name:2019,
    sale:3744,
  },
  {
    name:20210,
    sale:3555,
  },
  {
    name:2021,
    sale:335,
  }
]
function SimpleChart() {
  const [graphdata,setgraphdata]=useState(day);
      const Day=()=>{
           setgraphdata(day);
      }
      const Month=()=>{
           setgraphdata(monthly);
      }
      const Yearly=()=>{
           setgraphdata(yearly);
      }
    return (
    <div className="main-container">
      <Btn Day={Day} Month={Month} Yearly={Yearly}/>
      <div className="graph-container">
        <ComposedChart width={730} height={250} data={graphdata}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="sale" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </div>
    </div>
    )
}

export default SimpleChart;
