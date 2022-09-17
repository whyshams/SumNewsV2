import React,{useContext,createContext,useState,useEffect} from 'react';
import axios from 'axios';


const ResultContext = createContext();


export default function ResultContextProvider  ({children})  {
    const [bdNewsData,setBdNewsData] = useState([]); 

    const [bdNewsDataDiv, setBdNewsDataDiv] = useState([]);
    const [bdNewsDataCat, setBdNewsDataCat] = useState([]);
    
    const [catData,setCatData] = useState([]);


    const [sumData, setSumData] = useState();
    const [sumInput,setSumInput] = useState('');
    const [sumText,setSumText] = useState('');
    const [sumError, setSumError] = useState(false)

    const [Loading, setLoading] = useState(false)


    const [copied, setCopied] = useState(false);

    const getData = async () => {
        setLoading(true)
        await axios.request(
           {
             method: 'POST',
             url : "https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/",
             headers: {
               'content-type': 'application/json',
               'X-RapidAPI-Key': '3c84603cf9msh4143e6aff6a8074p1c4935jsnf23b029efa30',
               'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
               },
             data: `{"url":"${sumInput}","min_length":100,"max_length":300,"is_detailed":true}`
         }).then((response)=>setSumData(response.data)).catch(err => setSumError(true)).finally(() => setLoading(false))
 
       }
 
     
    useEffect(() => {
    if(sumInput !== ''){
      getData();
    }
      },[sumInput])
    
      
    
    


  return (
    <ResultContext.Provider value={{Loading,setLoading,sumError,bdNewsData,setBdNewsData,bdNewsDataDiv,setBdNewsDataDiv,catData,setCatData,sumData, setSumData,sumInput,setSumInput,sumText,setSumText,copied,setCopied,bdNewsDataCat, setBdNewsDataCat}}>
          {children}
        </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)