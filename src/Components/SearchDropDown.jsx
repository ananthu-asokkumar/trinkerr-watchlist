import { useContext, useEffect, useState } from "react";
import { WatchListContext } from "../Contexts/WatchListContextProvider";
import data from "../data.json";
import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { AiOutlinePlusSquare, AiOutlineDelete } from "react-icons/ai";

export const SearchDropDown = ({ search }) => {
  const { handleWatchListAdd, handleWatchListDelete, watchlist } =useContext(WatchListContext);
  const [results, setResults] = useState([]);

  const Search = () => {
    let string = search.trim();
    let result = data.filter((e) => {
      if (string.length > 0) {
        return e[0].includes(string.toUpperCase()) ? 1 : 0;
      }
     
      return 0;
    });
    setResults(result);
  };

  useEffect(() => {
    Search();
  }, [search]);

    
  return (
    <DropDown>
      {results.length > 0 ? (
        results.map((e, i) => {
          return (
            <div key={i} className="drop">
              <div className="dropbox">
                <div className="left">
                  <p className={e[1] - e[2] > 0 ? `profit` : `loss`}>
                    {e[0].split("::")[0]}
                  </p>
                  <p className="common">{e[0].split("::")[1]}</p>
                </div>
                <div className="buttonAddDelete">
                  {watchlist.includes(e) ? (
                    <AiOutlineDelete
                      onClick={() => {
                        handleWatchListDelete(e);
                      }}
                      className="delete"
                    />
                  ) : (
                    <AiOutlinePlusSquare
                      onClick={() => {
                        handleWatchListAdd(e);
                      }}
                      className="add"
                    />
                  )}
                </div>
                <div className="right">
                  <p className={e[1] - e[2] > 0 ? `profit` : `loss`}>{e[1]}</p>
                  <div className="percentage">
                    {e[1] - e[2] > 0 ? (
                      <TiArrowSortedUp className="arrow profit" />
                    ) : (
                      <TiArrowSortedDown className="arrow loss" />
                    )}
                    <p className="common">{(((e[1] - e[2]) / e[2]) * 100).toFixed(2)}%</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <NoSearch>
          <h3>Sorry!! No results found.</h3>
        </NoSearch>
      )}
    </DropDown>
  );
};


const DropDown = styled.div`
  width: 60%;
  margin-left: 20%;
  height: fit-content;
  max-height: 31rem;
  position: absolute;
  z-index: 1;
  background-color: rgba(250, 250, 250);
  overflow: auto;
  overflow-x: hidden;
  border-left: 1px solid rgb(223, 226, 226);

  .drop {
    margin-bottom: 0.5rem;
    .dropbox {
      display: flex;
      width: 100%;
      justify-content: space-between;
      min-height: 6rem;
      box-shadow: 0px 0px 8px rgb(214, 218, 218);
      border: 1px solid rgb(223, 226, 226);

      .profit {
        color: rgb(41, 197, 193);
        font-size: 1.6rem;
        font-weight: 600;
      }
      .loss {
        color: red;
        font-size: 1.6rem;
        font-weight: 600;
      }
      .left {
        margin-left: 1rem;
        width: 15rem;
      }
      .right {
        width: 9rem;
        > p {
          margin-left: 0.4rem;
        }
        .percentage {
          display: flex;
          width: 6rem;
          justify-content: space-evenly;
          margin-right: 0.5rem;
          p {
            margin-top: 0px;
          }

          .arrow {
            margin-top: 0.2rem;
          }
        }
      }
      .common {
        font-size: 1.3rem;
        color: rgb(177, 177, 177);
        font-weight: 600;
      }
      .buttonAddDelete {
        display: none;
      }
    }
    &:hover .buttonAddDelete {
      display: block;
      margin-top: 3.3rem;
      width: 3rem;
      height: 2rem;
      font-size: 2rem;
      .delete {
        color: red;
      }
      .add {
        color: green;
      }
    }
    &:hover {
      background: #f7f5f5;
    }
  }
`;

const NoSearch = styled.div`
text-align: center;
align-items: center;
height: 2rem;
h3{
color: #666262;
}
`;