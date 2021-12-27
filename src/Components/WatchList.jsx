import { useContext } from "react"
import { WatchListContext } from "../Contexts/WatchListContextProvider"
import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { AiOutlinePlusSquare, AiOutlineDelete } from "react-icons/ai";

export const WatchList = () => {
    const {watchlist,handleWatchListAdd,handleWatchListDelete,handleClearList } = useContext(WatchListContext);
    return watchlist.length > 0 ? (
      <WatchListDiv>
        <div className="watch">
          <h1>WatchList</h1>
          <div className="clear" onClick={()=>{handleClearList()}}>
            <AiOutlineDelete className="deleteBtn" />
            <p>Clear All</p>
          </div>
        </div>
        {watchlist.map((e, i) => {
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
                    <p className="common">
                      {(((e[1] - e[2]) / e[2]) * 100).toFixed(2)}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </WatchListDiv>
    ) : (
      <>
        <EmptyWatchList>
          <img
            src="https://web.trinkerr.com/static/media/search.2876cbc7.png"
            alt=""
          />
        </EmptyWatchList>
      </>
    );
}

const WatchListDiv = styled.div`
  width: 60%;
  margin-left: 20%;
  border: 1px solid #cac8c8;
  position: absolute;
  top: 5rem;
  height: 30rem;
  overflow: scroll;
  overflow-x: hidden;
  .watch {
      text-align: center;
      color: #6d6b6b;
      margin-top: 2.5rem;
    .clear{
      display: flex;
      justify-content: space-evenly;
      border: 1px solid #dddcdc;
      height: 1.9rem;
      width: 4.3rem;
      margin-left: 21rem;
      margin-bottom:.3rem ;
      cursor: pointer;

      .deleteBtn{
        color: red;
        margin-top: .5rem;
      }
      p{
        margin-top: 9px;
        font-size: .7rem;
      }
    }

  }
  .drop {
    margin-bottom: 0.5rem;
    .dropbox {
      display: flex;
      width: 100%;
      justify-content: space-between;
      border: 1px solid rgb(223, 226, 226);
      box-shadow: 0px 0px 8px rgb(214, 218, 218);
      min-height: 6rem;
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
      width: 5rem;
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

const EmptyWatchList = styled.div`
  width: 60%;
  margin-left: 20%;
  position: absolute;
  top: 5rem;
  img{
    height: 30rem;
    margin: 1rem 0 0 5rem;

  }
`;