import React , {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Button} from "../Button"
class Navbar extends Component {
    state = {clicked:false}
    handleclick=()=>{
        this.setState({clicked: !this.state.clicked})
    }


    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Dicky Han<i className="fab fa-react"></i></h1>
                <div className="menu-icon"onClick={this.handleclick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                   <ul className={this.setState.clicked?'nav-menu active': 'nav-menu'}>
                        {MenuItems.map((item,index)=> {
                            return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                            )
                        })}
                 </ul>
                 <Button>Sing Up</Button>
            </nav>
        )
    }
}

export default Navbar


// import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import {SidebarData}from './SidebarData';
// import './Navbar.css';
// import {IconContext} from 'react-icons'

// function Navbar() {
//     const [sidebar, setSidebar]=useState(false);
//     const showSidebar=()=> setSidebar(!sidebar);
//     return (
//         <>
//         <IconContext.Provider value={{color:'#fff'}}>
//             <div className="navbar">
//                 <Link to="#"className='menu-bars'>
//                     <FaIcons.FaBars onClick={showSidebar}/>
//                 </Link>
//             </div>
//             <nav className={sidebar ?'nav-menu active': 'nav-menu'}>
//                 <ul className='nav-menu-items'onClick={showSidebar}>
//                     <li className="navbar-toggle">
//                         <Link  to="#" className='menu-bars'>
//                             <AiIcons.AiOutlineClose/>
//                         </Link>
//                     </li>
//                     {SidebarData.map((item, index)=>{
//                         return(
//                             <li key={index}className={item.cName}>
//                                 <Link to={item.path}>
//                                     {item.icon}
//                                     <span>{item.tilte}</span>
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </nav>
//             </IconContext.Provider>
//         </>
//     );
// }

// export default Navbar;
