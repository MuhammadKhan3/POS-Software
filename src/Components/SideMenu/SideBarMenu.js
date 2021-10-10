import React, { useState } from 'react';
import './SideBarMenu.css';
import { NavLink } from 'react-router-dom';
import upArrow from '../icons/arrowupsolid.svg'
import downArrow from '../icons/arrowdownsolid.svg'
const SideBarMenu= () => {
const [dropdown,setdropdown]=useState({
    product:false,
    category:false,
    stock:false,
    purchase:false,
});
const SubMenuToggle=(e)=>{
    console.log(e.target.title);
    if(e.target.title==="products"){
        setdropdown(()=>{
            return  {product:!dropdown.product,
             category:false}
          });
    }
    else if(e.target.title==="category"){
        setdropdown(()=>{
            return  {product:false,
             category:!dropdown.category}
          });
    }
    else if(e.target.title==="stock"){
        setdropdown(()=>{
            return  {product:false,
             category:false,
             stock:!dropdown.stock,
             purchase:false}
          });
    }
    else if(e.target.title==="purchase"){
        setdropdown(()=>{
            return  {product:false,
             category:false,
             stock:false,
             purchase:!dropdown.purchase}
          });
    }
}
const Dashboardrefresh=()=>{
}
return (<>
<div className="bg-light sidemenucontainer overflow-auto scrollbar-success">
<ul className="sidemenu">
    <li className="sidelink">
        <div className="menulist">
         <NavLink to="/Dashboard" onClick={Dashboardrefresh} className="link color">Dashboarad</NavLink>
        </div>
    </li>
      <li className="sidelink">
          <div  onClick={SubMenuToggle} className="menulist"  title="products">
             <NavLink to="#" className="link color" title="products">Products</NavLink>
             <img src={`${dropdown.product ?  downArrow : upArrow}`} alt="dropdownarrow"  className="uparrow" title="products"/>
          </div>
          {dropdown.product &&<> <li className="sideinnerlink link"><NavLink to="#" className="sideinner-anchor">Insert Products</NavLink></li>
          <li className="sideinnerlink link"><NavLink to="#" className="sideinner-anchor">Delete Products</NavLink></li>
          <li className="sideinnerlink link"><NavLink to="#" className="sideinner-anchor">Edit Products</NavLink></li></>}
     </li>
     <li className="sidelink">
         <div className="menulist " onClick={SubMenuToggle} title="category">
          <NavLink to="#" className="link color" title="category">Category</NavLink>
          <img src={`${dropdown.category ?  downArrow : upArrow}`} alt="dropdownarrow" title="category" className="uparrow"/>
         </div>
          {dropdown.category &&<> <li className="link sideinnerlink"><NavLink to="#" className="sideinner-anchor">Insert Category</NavLink></li>
          <li className="link sideinnerlink"><NavLink to="#" className="sideinner-anchor">Delete Category</NavLink></li>
          <li className="link sideinnerlink"><NavLink to="#" className="sideinner-anchor">Edit Category</NavLink></li></>}
     </li>
     <li className="sidelink">
          <div onClick={SubMenuToggle} className="menulist" title="stock">
          <NavLink to="#" className="link color" title="stock">Stock</NavLink>
          <img src={`${dropdown.stock ?  downArrow : upArrow}`} title="stock" alt="dropdownarrow" className="uparrow"/>
          </div>
          {dropdown.stock &&<> <li className="link sideinnerlink"><NavLink to="#" className="sideinner-anchor">Check Stock</NavLink></li>
          <li className="link sideinnerlink"><NavLink to="#" className="sideinner-anchor">StockList Sale</NavLink></li>
          <li className="link sideinnerlink"><NavLink to="#" className="sideinner-anchor">Edit</NavLink></li></>}
     </li>
     <li className="sidelink">
          <div onClick={SubMenuToggle} title="purchase" className="menulist">
          <NavLink to="#" className="link color"  title="purchase" >Purchase</NavLink>
            <img src={`${dropdown.purchase ?  downArrow : upArrow}`} title="purchase" alt="dropdownarrow"  className="uparrow"/>
          </div>
          {dropdown.purchase &&<><li className="sideinnerlink link"><NavLink to="#" className="sideinner-anchor">Add Purchase</NavLink></li> 
          <li className="sideinnerlink link"><NavLink to="#" className="sideinner-anchor">Purchase Stock</NavLink></li>
          <li className="sideinnerlink link"><NavLink to="#" className="sideinner-anchor">Purchase Billing</NavLink></li>
          </>}
     </li>
</ul>
</div>
</>)
}
export  default SideBarMenu;