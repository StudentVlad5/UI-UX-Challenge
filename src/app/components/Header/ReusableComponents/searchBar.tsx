import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");
    console.log(search)
  return (
      <div className="relative w-1/3">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        <input
          onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full px-10 py-2 text-sm text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>)
};

export default SearchBar;
