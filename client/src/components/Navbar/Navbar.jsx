import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import  search  from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {jwtDecode} from 'jwt-decode'


import './Navbar.css'
import currentUserReducer from '../../reducers/currentUser'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    var user=useSelector((state)=>(state.currentUserReducer));



    const handleLogout=()=>{
      dispatch({type:'LOGOUT'})
      navigate('/');
      dispatch(setCurrentUser(null))
    }

    useEffect(()=>{


      const token=user?.token
      if(token){
        const decodedtoken=jwtDecode(token);
        if(decodedtoken.exp * 1000 < new Date().getTime()){
          handleLogout();
        }
      }
       dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
  return (
    <nav className='main-nav'>
    <div className='navbar'>
        <Link to='' className='nav-item nav-logo'></Link>
        <img src={logo} alt='logo'></img>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Product</Link>
        <Link to='/' className='nav-item nav-btn'>forteam</Link>
        <form>
            <input type='text' placeholder='search.....'></input>
            <img src={search} alt='search' width='23' className='search-icon'></img>
        </form>
        {
            user===null ? <Link to='/Auth' className='nav-item nav-links'>login</Link>:
            <><Avatar backgroundColor='#009dff' px='10px' py='7px'
            
            color="white"><Link to={`/Users/${user?.result?._id}`} className='nav-item nav-links' style={{color:"white" ,textDecoration:"none"}}>{user.result.name.charAt(0).toUpperCase()}</Link></Avatar>
               <button onClick={handleLogout}>Logout</button>
            </>
        }
      
    </div>
    </nav>
  )
}

export default Navbar
