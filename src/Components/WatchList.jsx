import { useContext } from "react"
import { WatchListContext } from "../Contexts/WatchListContextProvider"
import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { AiOutlinePlusSquare, AiOutlineDelete } from "react-icons/ai";

export const WatchList = () => {
    const {watchlist,handleWatchListAdd,handleWatchListDelete } = useContext(WatchListContext);
    return watchlist.length > 0 ? (
      <WatchListDiv>
            <h1>watch lisit</h1>
            {
                watchlist.map((e, i) => {
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
                              <p>
                                {(((e[1] - e[2]) / e[2]) * 100).toFixed(2)}%
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="buttonAddDelete">
                          {watchlist.includes(e) ? (
                            <AiOutlineDelete
                              onClick={() => {
                                handleWatchListDelete(e);
                              }}
                            />
                          ) : (
                            <AiOutlinePlusSquare
                              onClick={() => {
                                handleWatchListAdd(e);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    );
                })
            }
      </WatchListDiv>
    ) : (
      <>
        <div>
          <img
            src="https://web.trinkerr.com/static/media/search.2876cbc7.png"
            alt=""
          />
        </div>
      </>
    );
}

const WatchListDiv = styled.div`
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