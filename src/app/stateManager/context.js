"use client"
import React from "react";

import { createContext, useReducer, useState } from "react";
import { reducer } from "./reducer";


export const StateContext = React.createContext();

const StateContextProvider = ({children}) =>{

    
    const [jobs, setJobs] = useState([]);
    

    const defaultState = {
    toggleProfile : false,
        }

    const [state, dispatch] = useReducer(reducer, defaultState)


    return (
        <StateContext.Provider value={{state, dispatch, setJobs, jobs}}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider;