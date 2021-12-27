import styled from 'styled-components'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from 'react';
import { SearchDropDown } from './SearchDropDown';
export const SearchBar = () => {
    const [search, setSearch] = useState("");
    console.log(search);
    return (
        <>
            <Searchdiv>
                <input onChange={(e)=>{setSearch(e.target.value)}} className='input' type="text" name="" id="" placeholder='Search Stocks...'/>
                <AiOutlineCloseCircle className='close'/>

            </Searchdiv>
            <SearchDropDown search={search}/>
        </>
    )
}


const Searchdiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: 20%;
  height: 2.4rem;
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
  .input::placeholder{
      font-size: 1rem;
  }
  .close {
    font-size: 2rem;
    color: #ccc6c6;
    margin-top: .2rem;
    &:hover {
        cursor: pointer;
    }
  }
`;