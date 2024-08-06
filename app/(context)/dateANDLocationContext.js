"use client";

import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  start: null,
  end: null,
  location: "title",
};

function reducer(state, action) {
  switch (action.type) {
    case "updateState":
      return {
        ...state,
        start: action.payload.start,
        end: action.payload.end,
        location: action.payload.location,
      };
  }
}

function DateANDLocationContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { start, end, location, error } = state;

  return (
    <Context.Provider value={{ start, end, location, dispatch, error }}>
      {children}
    </Context.Provider>
  );
}
const useDatesANDLocation = () => {
  const context = useContext(Context);
  return context;
};

export { DateANDLocationContext, useDatesANDLocation };
