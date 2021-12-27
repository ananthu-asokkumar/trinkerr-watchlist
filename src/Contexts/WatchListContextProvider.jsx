import { createContext, useState } from "react";

export const WatchListContext = createContext({
  watchlist: [],
  handleWatchListAdd: () => {},
  handleWatchListDelete: () => { },
  handleClearList:()=>{}
});
export const WatchListContextProvider = ({ children }) => {
  const [watchlist, setWatchList] = useState([]);

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

 

  return (
    <WatchListContext.Provider
      value={{
        handleWatchListAdd,
        handleWatchListDelete,
        watchlist,
        handleClearList
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
