import SearchInput from "./SearchInput";
import logo from "../assets/google-logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { menu } from "../utils/Constants";
import { Link } from "react-router-dom";

import { useContext, useEffect } from "react";
import { GlobalContext } from "../utils/ContextApi";

const SearchResultHeader = () => {
  const { query } = useParams();
  const {category, setCategory, handleImages, handleClick} = useContext(GlobalContext);
  // console.log(category)  
  
  const navigate = useNavigate()
  
useEffect(() => {
  setCategory('All');
  navigate(`/${query}/${1}`)
}, [])

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
      
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="hidden md:block w-[92px] mr-10"
            />
          </Link>
          <SearchInput />
        </div>
      </div>

      <div className="flex ml-[-12px] mt-3">
      {
        menu?.map((items, index) => (
            <span key={index} className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${category === items.name ? 'text-[#1a73e8]' : ''}`}
            onClick={() => {
              setCategory(items.name)
            }}
            >
                <span className="hidden md:block mr-2">{items.icon}</span>
                <span className="text-sm">{items.name}</span>
                {
                    category === items.name && (
                        <span className='h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]' />
                    )
                }
            </span>
           
        ))
      }
      </div>

    </div>
  );
};

export default SearchResultHeader;
