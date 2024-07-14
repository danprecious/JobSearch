"use client";
import React from "react";

import { createContext, useReducer, useState } from "react";
import reducer, { initialState } from "./reducer";

export const StateContext = React.createContext();

const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
