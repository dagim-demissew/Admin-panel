import React from 'react'
import '../style/home.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Widget from '../components/widget'
import Featured from '../components/featured'
import Chart from '../components/chart'
import Table1 from '../components/table'


function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className='widgets'>
            <Widget type ='user'/> 
            <Widget type ='order'/> 
            <Widget type ='earning'/> 
            <Widget type ='balance'/> 
          </div>
          <div className="charts">
            <Featured/>
            <Chart aspect ={2/1} title = "Last six Months revenue2" height={350} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table1/>
          </div>
        </div>
    </div>
  )
}

export default Home