import React , { useState, createContext } from 'react'
 //Create Context
export const SidebarContext = createContext();
const SidebarProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  }
  return (
    //Sidebar State
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</SidebarContext.Provider>
  )
}

export default SidebarProvider;