import { createContext, useState } from "react";

export const WatchListContext = createContext({
  watchlist: [],
  handleWatchListAdd: () => {},
  handleWatchListDelete: () => { },
  handleClearList: () => { },
  handleSearch: ()=> { },
    input:"",
});
export const WatchListContextProvider = ({ children }) => {
  const [watchlist, setWatchList] = useState([]);
  const [input,setInput]=useState("")

  const handleWatchListAdd = (e) => {
    setWatchList([e, ...watchlist]);
  };

  const handleWatchListDelete = (e) => {
    let res = watchlist.filter((el) => {
      return el !== e;
    });
    setWatchList(res);
  };

  const handleClearList = () => {
    setWatchList([]);
  }
  const handleSearch = (e) => {
  setInput(e.trim())
}
 

  return (
    <WatchListContext.Provider
      value={{
        handleWatchListAdd,
        handleWatchListDelete,
        watchlist,
        handleClearList,
        handleSearch,
        input
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
