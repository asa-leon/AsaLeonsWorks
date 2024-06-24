import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'

const GlobalContext = createContext(
	{} as {
		titleNum: string
		setTitleNum: Dispatch<SetStateAction<string>>
	})

export function useGlobalContext() {
    return useContext(GlobalContext)
}

export function GlobalContextProvider({ children }) {

    const [titleNum, setTitleNum] = useState<string>('0')

    /* 複数の値を管理する場合は以下の様に記述する
    *
    *  const [hoge, setHoge] = useState(any)
    *  const [fuga, setFuga] = useState(any)
    *
    *  let value = [
    *   {hoge, setHoge},
    *   {fuga, setFuga}
    *  ]
    * 
    *  Contextの利用先では、以下の様に取り出す
    *  
    *  1: import { useGlobalContext } from '../../context/global'
    *  2: const [ {hoge, setHoge}, ...必要なオブジェクトだけを配列内に記述 ] = useGlobalContext()
    */

    return (
        <GlobalContext.Provider value={{titleNum, setTitleNum}}>
            { children }
        </GlobalContext.Provider>
    )
}

