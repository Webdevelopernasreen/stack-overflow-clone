// import React from "react";
// import './LeftSidebar.css'
// import {NavLink} from 'react-router-dom'
// import Globe from '../../assets/Globe.svg'

// const LeftSidebar=()=>{
//     return(
//         <div className="left-sidebar">
//             <div className="side-nav">
//                 <NavLink to='/' className='nav-side-links' activeClassName='active' >
//                     <p>Home</p>
//                 </NavLink>
//                 <div className="side-nav-div">
//                     <div><p>PUBLIC</p></div>
//                     <NavLink to='/Questions' className='side-nav-links' activeClassName='active' >
//                         <img src={Globe} alt="Globe"></img>
//                         <p style={{paddingLeft:"10px"}}>Questions</p>

//                     </NavLink>
//                     <NavLink to='/Tags' className='side-nav-links' activeClassName='active'style={{paddingLeft:'40x'}}>
//                      <p>Tags</p>
//                     </NavLink>
//                     <NavLink to='/Users' className='side-nav-links' activeClassName='active'style={{paddingLeft:'40x'}}>
//                      <p>Users</p>
//                     </NavLink>
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default LeftSidebar;
import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
// import Globe from '../../assets/Globe.png'
import Globe from "../../assets/Globe.svg";

const LeftSidebar = () => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  return (
    <div
      className="left-sidebar"
      // style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <button  className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
                 <img src={Globe} alt="Globe" width='40px'/>
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;

