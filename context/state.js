import { createContext, useContext } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
    let sharedState = {
        titles: ['Frontend Coding', 'PHP', 'Beat Making']
    }

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}