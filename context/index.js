import { createContext, useContext, useReducer } from "react"

const Context = createContext()

export const useProvider = () => useContext(Context)

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(
        (state, { key, value }) => ({ ...state, [key]: value }),
        {}
    )
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
