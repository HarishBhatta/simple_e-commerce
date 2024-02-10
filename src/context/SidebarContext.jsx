import React , { useState, createContext } from 'react'
 //Create Context
export const SidebarContext = createContext();
const SidebarContext = ({children}) => {
  return (
    //Sidebar State
    <SidebarContext.Provider>{children}</SidebarContext.Provider>
  )
}

export default SidebarContext