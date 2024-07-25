
import SearchResultHeader from "../../components/SearchResultHeader";
import Footer from "../../components/Footer";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../utils/ContextApi";
import SearchedImageTemplate from "../../components/SearchedImageTemplate";
import SearchedItemTemplate from "../../components/SearchedItemTemplate";
import Pagination from "../../components/Pagination";
import { useParams } from "react-router-dom";
import axios from 'axios'


const SearchResult = () => {
  const { items, imageList, category, handleImages, setItems } = useContext(GlobalContext);
  // console.log(items);
  // console.log(imageList)

  const { query, startIndex } = useParams();
  const params = {
    key: "AIzaSyDXICsnjiVc0qUETx547CEqTD9rJE_3zik",
    cx: "f1225142f245c448b",
  };

  useEffect(() => {
    fetchSearchResults();
  }, [startIndex, query, category]);

  async function fetchSearchResults() {
    if (category === "Images") {
      handleImages({searchType: 'image', q: query, start: startIndex})
    } else {
      const res = await axios.get(`https://www.googleapis.com/customsearch/v1`, {            // fetch doesn't directly accept params as options
        params: { ...params, start: startIndex, q: query },
      });
      setItems(res)
    }
  }

  return (
    <div className="flex flex-col min-h-[100vh]">
      <SearchResultHeader />

      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <div className="flex text-sm text-[#70757a] mb-3">
          {category === "Images"
            ? `About ${imageList?.data?.searchInformation?.formattedTotalResults} results in ${imageList?.data?.searchInformation?.formattedSearchTime}`
            : `About ${items?.data?.searchInformation?.formattedTotalResults} results in ${items?.data?.searchInformation?.formattedSearchTime}`}
        </div>

        {category === "Images" ? (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {imageList?.data?.items?.map((item, index) => (
              <SearchedImageTemplate key={index} data={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {items?.data?.items?.map((item, index) => (
              <SearchedItemTemplate key={index} data={item} />
            ))}
          </div>
        )}
        <Pagination queries={items?.data?.queries} />
      </main>

      <Footer />
    </div>
  );
};

export default SearchResult;

