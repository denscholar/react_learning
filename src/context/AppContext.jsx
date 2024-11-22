import { createContext } from "react";

export const AppContext = createContext()


const ContextProvider = (props) => {
    const phone = "+2347031501124"
    return (<AppContext.Provider value={phone}>
        {props.children}
    </AppContext.Provider>)
}

export default ContextProvider