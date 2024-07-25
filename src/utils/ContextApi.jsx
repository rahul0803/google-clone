import { createContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const GlobalContext = createContext(null);

export default function AppContext({ children }) {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [items, setItems] = useState(null);
    const [imageList, setImageList] = useState(null);

    const navigate = useNavigate();

    const BASE_URL = "https://www.googleapis.com/customsearch/v1"

    const params = {
        key: 'AIzaSyDXICsnjiVc0qUETx547CEqTD9rJE_3zik',
        cx: 'f1225142f245c448b'
    }

    const handleClick = async (e) => {
        try {
                const res = await axios.get(BASE_URL, { params: { ...params, q: query } });
                // console.log(res)
                if (res && res.data) {
                    setItems(res)
                } else {
                    setItems(null)
                }
                navigate(`/${query}/${1}`)
                // setQuery('');
        }
        catch (error) {
            console.log(error)
        }
    }

    async function handleImages(payload) {
       try {
        //  console.log(payload)
         const res = await axios.get(BASE_URL, { params: { ...params, ...payload } });
        //  console.log(res.data)
         if (res && res.data) {
             setImageList(res)
         }
       } catch(err) {
        console.log(err)
       }
    }

    return (
        <GlobalContext.Provider value={{ category, setCategory, query, setQuery, handleClick, items, handleImages, imageList, setItems }}>
            {children}
        </GlobalContext.Provider>
    )
}