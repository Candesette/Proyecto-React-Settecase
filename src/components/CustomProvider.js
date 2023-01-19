import {createContext} from 'react';

const context = createContext();
const Provider= context.Provider;

export function CustomProvider({children}) {
  const value = {
    cart : {},
    totalProducts : 0
  }
  return(
    <Provider value={{value}}>
      {children}
    </Provider>
  )
}