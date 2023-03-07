import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import { GlobalContextProps, JSXChildrenProps } from "../interfaces/Interfaces";

const INITIAL_STATE: GlobalContextProps = {
    data: { user_id: null},
    error: null,
    theme:  null,
    action: null,
    dispatch() {
        return() => {}
    }
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalProvider = ({ children }: JSXChildrenProps) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
    
    return (
        <GlobalContext.Provider 
            value = {{
                data: state.data,
                action: state.action,
                error: state.error,
                theme: state.theme,
                dispatch
            }}
        >
            { children }
        </GlobalContext.Provider>
    )
}
