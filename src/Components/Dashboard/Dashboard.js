import React, { useState } from 'react'
import './Dashboard.css'
import customer from '../icons/Dashboardicon/customers.svg'
import TotalSale from '../icons/Dashboardicon/totalsale.svg'
import item from '../icons/Dashboardicon/item.svg'
import AvailableItem from '../icons/Dashboardicon/availableitem.svg'
import SimpleChart from './Graph/SimpleChart'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
    return (<>
        <div className="container">
            <div className="total-container border border-primary border shadow p-3 mb-5 bg-white  general availableitem">
                <div className="text text-primary">
                    <h4>3455</h4>
                    <p>Available item</p>
                </div>
                <img src={AvailableItem} className="imgsize border border-primary bg-primary availableimage" alt="usersvg"></img>
            </div>
            <div className="border border-success border shadow p-3 mb-5 bg-white  customer general">
                <div className="text text-success">
                    <h5>3456</h5>
                    <p>customers</p>
                </div>
                <img src={customer} className="imgsize border  bg-success customerimg" alt="usersvg"></img>
            </div>
            <div className="sale-container border border-warning border shadow p-3 mb-5 bg-white  general totalprice">
                <div className="text text-warning">
                    <h4>3455</h4>
                    <p>Total Sales price</p>
                </div>
                <img src={TotalSale} className="imgsize border border-warning bg-warning totalsaleimg" alt="usersvg"></img>
            </div>
            <div className="item-container border border-danger border shadow p-3 mb-5 bg-white  general itemsale">
                <div className="text text-danger">
                    <h4>345</h4>
                    <p>Items sale</p>
                </div>
                <img src={item} className="imgsize border border-danger bg-danger itemsaleimg" alt="usersvg"></img>
            </div>
        </div>
        <SimpleChart/>
        </>)
}
export default Dashboard;
