import { useContext, useEffect, useState } from "react";
import { WatchListContext } from "../Contexts/WatchListContextProvider";
import data from "../data.json";
import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { AiOutlinePlusSquare, AiOutlineDelete } from "react-icons/ai";

export const SearchDropDown = ({ search }) => {
  const { handleWatchListAdd, handleWatchListDelete, watchlist } =useContext(WatchListContext);
  const [results, setResults] = useState([]);
  const [added,setAdded]=useState(false)
  console.log(data);
    let flag = 0;

  const Search = () => {
    let string = search.trim().split(" ");
    let result = data.filter((e) => {
      // console.log(e[0]);
      if (string.length === 1 && string[0] !== "") {
      flag = 1;

        return e[0].match(new RegExp(string[0], "gi")) !== null ? 1 : 0;
      }
      if (string.length >= 2 && string[1] !== "")
        return e[0].match(new RegExp(string[1], "gi")) !== null && flag === 1
          ? 1
          : 0;
      return 0;
    });
    setResults(result);
  };
  console.log(results,"results");

  useEffect(() => {
    Search();
  }, [search]);

  const check = (e) => {
    if (watchlist.includes(e)) {
      setAdded(true);

    }
    
  }
  console.log(watchlist,"watchlist");
  return (
    <DropDown>
      {
        results?.map((e, i) => {
         return (
           <div key={i} className="drop">
             <div className="dropbox">
               <div className="left">
                 <p>{e[0].split("::")[0]}</p>
                 <p>{e[0].split("::")[1]}</p>
               </div>
               <div className="right">
                 <p>{e[1]}</p>
                 <div className="percentage">
                   {e[1] - e[2] > 0 ? (
                     <TiArrowSortedUp className="arrow" />
                   ) : (
                     <TiArrowSortedDown className="arrow" />
                   )}
                   <p>{(((e[1] - e[2]) / e[2]) * 100).toFixed(2)}%</p>
                 </div>
               </div>
             </div>
             <div className="buttonAddDelete">
               {watchlist.includes(e) ? (
                 <AiOutlineDelete onClick={() => { handleWatchListDelete(e) }} />
               ) : (
                   <AiOutlinePlusSquare onClick={() => { handleWatchListAdd(e) }}/>
               )}
             </div>
           </div>
         );
        })
      }

    </DropDown>
  );
};


const DropDown = styled.div`
  width: 60%;
  margin-left: 20%;
  border: 1px solid red;

  .drop {
    .dropbox {
      display: flex;
      width: 100%;
      justify-content: space-between;
      border: 1px solid blue;
      position: relative;
      .left {
      }
      .right {
        .percentage {
          display: flex;
          width: 5;
          border: 1px solid blue;
          .arrow {
            border: 1px solid red;
            margin-top: 1rem;
          }
        }
      }
    
    }
      &:hover > .buttonAddDelete {
        display: block;
        position: absolute;
        width: 2rem;
        z-index: 1;
        left: 35rem;
       margin-top: -5rem;
        border: 1px solid red;
      }
    .buttonAddDelete {
      display: none;
    }
  }
`;