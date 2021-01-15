import React, { Component } from 'react'
import { FaBars} from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import {links,social} from './data'

 const  FrontendHeaderComponent =()=> {
  const [showList,setShowList]=React.useState(true)
  const togleButton =() =>{
              setShowList(!showList)
          
  }
 
        return (
            <nav>
                <div className='nav-center'>
                     <div className='nav-header'>
                         {
                             showList? 
                             <button className='nav-toggle-icon nav-toggle-icon'
                             onClick={()=>togleButton()}
                             >
                                 <FaBars></FaBars>
                             </button>
                             
                             : <button className='nav-toggle-icon nav-toggle-icon'
                             onClick={()=>togleButton()}
                             >
                                
                                <AiOutlineClose></AiOutlineClose>
                             </button>
                         }
                        
                     </div>
                     {
                         !showList &&  <div className='links-container show-container'>
                         <ul className='links'>
                             {
                                  links.map((link) =>{
                                      return <li key={link.id}>
                                          <a href={link.url}>
                                          {link.text}
                                          </a>
                                          </li>
                                  })
                             }
                         </ul>
                   </div>
                     }
                    
                </div>
            </nav>
        )
    
}
export default FrontendHeaderComponent;
