import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import { filterData } from '../../redux/features/ dashboardSlice'; // Import the filterData action

const Navbar = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
    dispatch(filterData(searchQuery)); // Dispatch filter action with search query
  };

  return (
    <div className="navbar">
      <div className="logo">
        <span>Harihelp.com</span>
      </div>
      <div className="menu-icon" onClick={toggleSidebar}>
        <MenuIcon />
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update local state
        />
        <SearchIcon className="search-icon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Navbar;
