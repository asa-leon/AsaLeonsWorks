import { createContext, useState, useContext } from 'react'

const GlobalContext = createContext()

export function useGlobalContext() {
    return useContext(GlobalContext)
}

export function GlobalContextProvider({ children }) {

    const [titleNum, setTitleNum] = useState('0')

    let value = {titleNum, setTitleNum}

    /* 複数の値を管理する場合は以下の様に記述する
    *
    *  const [anotherItem, setAnotherItem] = useState(any)
    *
    *  let value = [
    *   {titleNum, setTitleNum},
    *   {anotherItem, setAnotherItem}
    *  ]
    *  Contextの利用先で、同じ情報を取り出さないと動かない模様。。
    */

    return (
        <GlobalContext.Provider value={value}>
            { children }
        </GlobalContext.Provider>
    )
}

