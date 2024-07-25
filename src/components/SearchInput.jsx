
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { GlobalContext } from "../utils/ContextApi";
import { useContext } from "react";

import MicIcon from '../assets/mic.svg'
import ImageIcon from '../assets/image.svg'

const SearchInput = () => {
  const { query, setQuery, handleClick } = useContext(GlobalContext);

  function handleSubmit(e) {
  e.preventDefault();
  if(query.trim() !== '') {
    handleClick();
  }}

  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:border-0 hover:shadow-zinc-500 focus-within:shadow focus-within:border-0"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />

      <form action="" onSubmit={handleSubmit} className="flex-grow flex">
      <input
        type="text"
        value={query}
        autoFocus
        onChange={(e) => setQuery(e.target.value)}
        // onKeyUp={handleClick}
        className="grow outline-0 text-black/[0.87]"
      />
      </form>

      <div className="flex items-center gap-3">
      {
       query && <IoMdClose size={24} color='#70757a' className='cursor-pointer' onClick={() => setQuery('')} />
      }
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} /> 
      </div>
    </div>
  );
};

export default SearchInput;

