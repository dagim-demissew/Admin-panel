import React from 'react'
import '../style/widget..scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";


function Widget( {type}) {

    const amount =100;
    const diff =100;

    let data;
        switch(type){
            case "user":
                data = {
                    title:"User",
                    isMoney: false,
                    link: "See all users",
                    icon: (
                        <PersonOutlinedIcon className='icon'  
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                          }}/>
                    )
                };
                break;
            case "order":
                data = {
                    title:"Orders",
                    isMoney: false,
                    link: "View all orers",
                    icon: (
                        <ShoppingCartOutlinedIcon className='icon'
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                          }}
                        />
                    )
                };
                break;

            case "earning":
                data = {
                    title:"Earning",
                    isMoney: true,
                    link: "View net earnings",
                    icon: (
                        <MonetizationOnOutlinedIcon className='icon'
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                        />
                    )
                };
                break;

            case "balance":
                data = {
                    title:"Blance",
                    isMoney: true,
                    link: "See details",
                    icon: (
                        <AccountBalanceWalletOutlinedIcon className='icon' 
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                          }}
                        />
                    )
                };
                break;
                default:
                break;
        }


  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"} {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diff} %
            </div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget