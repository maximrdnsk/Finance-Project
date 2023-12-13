import React, {useState} from 'react';
import "./navigation.scss";
import {sidebarItems} from "../../utils/sidebarItems";

function Navigation({active, setActive}) {

  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        {sidebarItems.map((item) => {
          return <button className="sidebar__button" key={item.id} 
          onClick={()=> setActive(item.id)}>
            <img className="sidebar__icon" src={item.icon} alt="icon"/>
            <span>{item.title}</span>
          </button>
        })}
      </ul>
    </div>
  )
}

export {Navigation}

