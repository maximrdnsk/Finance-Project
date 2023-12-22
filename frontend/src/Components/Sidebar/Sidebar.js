import React, {useState} from 'react';
import "./sidebar.scss";
import {sidebarItems} from "../../utils/sidebarItems";
import {iconLogo} from "../../utils/icons"

function Navigation({active, setActive}) {

  return (
    <div className="sidebar">
      <img src={iconLogo} alt='logo' className="sidebar-logo"/>
      <ul className="sidebar-items">
        {sidebarItems.map((item) => {
          return <button className="sidebar__button" key={item.id} 
          onClick={()=> setActive(item.id)}>
            {item.icon}
            <span>{item.title}</span>
          </button>
        })}
      </ul>
    </div>
  )
}

export {Navigation}

