import { createContext, useState } from "react"
import data from '../data.json'

export const WatchListContext=createContext({watchlist:[],handleWatchListAdd:()=>{},handleWatchListDelete:()=>{}})
export const WatchListContextProvider = ({children}) => {
    const [watchlist, setWatchList] = useState([]);

    const handleWatchListAdd = (e) => {
        console.log(e);
        // let res = data.filter((el) => {
            
        //     if (e === el[0]) {
        //         return 1;
        //     }
        //     return 0;

        // })
        setWatchList([e,...watchlist]);
    }

    const handleWatchListDelete = (e) => {
        let res = watchlist.filter((el) => {
            return el !== e;
        });
        setWatchList(res);

    }

    return (
        <WatchListContext.Provider value={{handleWatchListAdd,handleWatchListDelete,watchlist}}>
            {children}
        </WatchListContext.Provider>
    )
}

