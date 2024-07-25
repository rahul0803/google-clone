
import { pagination } from "../utils/Constants";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import logo from "../assets/google-pagination-logo.png";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";

const Pagination = ({ queries }) => {
  console.log(queries);

  const [page, setPage] = useState(pagination[0].startIndex);
  const navigate = useNavigate();
  const {query} = useParams();
  const {startIndex} = useParams();
  
  function paginationClickHandler(startIndex) {                                     // startIndex == page
  navigate(`/${query}/${startIndex}`)
  }

  useEffect(() => {
  setPage(pagination[0].startIndex)
  }, [query])

  return (
    <div className="flex flex-col items-center py-14 max-w-[700px]">

      <div className="relative text-[#4285f4]">
        {
          page > 1 && page <= pagination[pagination.length - 1].page && (
          <div className="absolute left-[-30px] md:left-[-40px] top-[10px]"
          onClick={() => {
            setPage(page - 1)
            paginationClickHandler(parseInt(startIndex) - 10)
          }}
          >
            <FiChevronLeft size={20} className="cursor-pointer" />
            <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
              Prev
            </div>
          </div>
        )
        }

        <img src={logo} className="w-[250px] md:w-[300px]" />

        {
          page >= 1 && page < pagination[pagination.length - 1].page && (
          <div className="absolute right-[-30px] md:right-[-40px] top-[10px]"
          onClick={() => {
            setPage(page + 1)
            paginationClickHandler(parseInt(startIndex) + 10)
          }}>
            <FiChevronRight size={20} className="cursor-pointer" />
            <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
              Next
            </div>
          </div>
        )
      }
      </div>

      <div className="flex gap-3 text-[#4285f4] text-sm">
        {
          pagination?.map((item) => (
          <span
            key={item?.startIndex}
            className={`cursor-pointer ${
              page === item?.page ? "text-black" : ""
            }`}
            onClick={() => {
              setPage(item?.page)
              paginationClickHandler(item?.startIndex)
            }}
          >
            {item?.page}
          </span>
        ))
      }
      </div>

    </div>
  );
};

export default Pagination;

