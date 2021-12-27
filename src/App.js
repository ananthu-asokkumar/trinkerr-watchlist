import logo from './logo.svg';
import './App.css';
import { SearchBar } from './Components/SearchBar';
import { SearchDropDown } from './Components/SearchDropDown';
import { WatchList } from './Components/WatchList';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <WatchList/>
    </div>
  );
}

export default App;
