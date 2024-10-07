import React from 'react'
import '../style/single.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Chart from '../components/chart'
import Table1 from '../components/table'


function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className='title'>Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='itemImg' alt="" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janeDoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+27839839893</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Addres:</span>
                  <span className="itemValue">Addis ababba ruwanda str12</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect ={3/1} title = "User transactions last six month" height={250}/>
          </div>
        </div>
        <div className="bottom">
        <h1 className='title'>Latest Transactions</h1>
          <Table1/>
        </div>
      </div>
    </div>
  )
}

export default Single