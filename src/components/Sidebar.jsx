import React from 'react'
import '../style/sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
        <Link className="link" to="/">
        <span className='logo'>dagimP5</span>
          </Link></div>
      <hr />
     
      <div className="center">
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className='title'>LIST</p>

          <Link className="link" to="/users">
          <li>
          <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
        </Link>
          <Link className="link" to="/products">
          <li>
          <StoreIcon className="icon" />
            <span>Products</span>
          </li>
        </Link>
          <Link className="link" to="/">
          <li>
          <CreditCardIcon className="icon" /> 
            <span>Orders</span>
          </li>
        </Link>
          <Link className="link" to="/">
          <li>
          <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
        </Link>
          <p className='title'>MAINTAINANCE</p>

          <Link className="link" to="/">
          <li>
          <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
        </Link>
          <Link className="link" to="/">
          <li>
          <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
        </Link>
          <p className='title'>SERVICE</p>
          <Link className="link" to="/">
          <li>
          <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
        </Link>
          <Link className="link" to="/">
          <li>
          <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
        </Link>
          <Link className="link" to="/">
          <li>
          <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
        </Link>
          <p className='title'>USER</p>
          <Link className="link" to="/">
          <li>
          <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
        </Link>
          <Link className="link" to="/">
          <li>
          <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar