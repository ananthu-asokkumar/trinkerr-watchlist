
import './App.css';
import { SearchBar } from './Components/SearchBar';
import { WatchList } from './Components/WatchList';
import { useContext } from 'react';
import { WatchListContext } from './Contexts/WatchListContextProvider';

function App() {
  const { input } = useContext(WatchListContext);
  return (
    <div className="App">
      <SearchBar />
      {
        input.length===0&&
     <WatchList />
      }  
    </div>
  );
}

export default App;
