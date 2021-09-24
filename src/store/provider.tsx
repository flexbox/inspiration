import React, { Component } from 'react'
import { Provider } from './createContext'

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
function AppProvider() {
  state = {}

  return <Provider value={state}>{props.children}</Provider>
}

export default AppProvider
