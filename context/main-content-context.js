import { createContext, useState, useContext } from 'react'

const MainContentContext = createContext()

export function useMainContentContext() {
    return useContext(MainContentContext)
}

export function MainContentProvider({ children }) {

    const [titleNum, setTitleNum] = useState('0')

    let value = {
        titleNum,
        setTitleNum
    }
    
    return (
        <MainContentContext.Provider value={value}>
            { children }
        </MainContentContext.Provider>
    )
}

