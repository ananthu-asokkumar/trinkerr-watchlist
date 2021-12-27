import { useContext, useEffect, useState } from "react";
import { WatchListContext } from "../Contexts/WatchListContextProvider";
import data from "../data.json";
import styled from "styled-components";

export const SearchDropDown = ({ search }) => {
  const { handleWatchListAdd, handleWatchListDelete, watchlist } =useContext(WatchListContext);
  const [results, setResults] = useState([]);
  const [added,setAdded]=useState(false)
  console.log(data);

  const Search = () => {
    let string = search.trim().split(" ");

    let result = data.filter((e) => {
      if (string.length === 1 && string[0] !== "")
        return e.question.match(new RegExp(string[1], "gi")) !== null ? 1 : 0;
      if (string.length >= 2 && string[1] !== "")
        return e.question.match(new RegExp(string[2], "gi")) !== null ? 1 : 0;
      return 0;
    });
    setResults(result);
  };

  useEffect(() => {
    Search();
  }, [search]);

  const check = (e) => {
    if (watchlist.includes(e)) {
      setAdded(true);

    }
    
  }

  return (
    <DropDown>
      {
        results?.map((e, i) => {
          <div
            className={watchlist.includes(e) ? `drop added` : `drop notAdded`}
          >
            <div className="left">
              <p></p>
              <p></p>
            </div>
            <div className="right">
              <p></p>
              <p></p>
            </div>
          </div>;
        })
      }

    </DropDown>
  );
};


const DropDown = styled.div`


`;