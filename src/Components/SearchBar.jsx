import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext, useRef, useState } from "react";
import { SearchDropDown } from "./SearchDropDown";
import { WatchListContext } from "../Contexts/WatchListContextProvider";
export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const {handleSearch}=useContext(WatchListContext)
  const inputref = useRef(null);

  return (
    <>
      <Searchdiv>
        <input
          ref={inputref}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
          className="input"
          type="text"
          name=""
          id=""
          placeholder="Search Stocks..."
        />
        <AiOutlineCloseCircle
          className="close"
          onClick={() => {
            setSearch("");
            inputref.current.value = "";
            handleSearch("")
          }}
        />
      </Searchdiv>
      {
        
      search.trim()!==""&&<SearchDropDown search={search} />
      }
    </>
  );
};

const Searchdiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: 20%;
  height: 3rem;
  border: 1px solid #ccc6c6;
  margin-top: 2rem;

  .input {
    width: 90%;
    padding-left: 1rem;
    font-size: 1rem;
    border: none;

  }
  .input:focus {
    outline: none;
    border: none;
  }
  .input::placeholder {
    font-size: 1rem;
  }
  .close {
    font-size: 2rem;
    color: #ccc6c6;
    margin-top: 0.5rem;
    margin-right: .7rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
