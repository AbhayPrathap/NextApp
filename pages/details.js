import React, {useState, useEffect} from 'react';
import { Paper, Chip } from '@material-ui/core';
import SearchAndSelect from 'react-select';
import styles from '../styles/Details.module.css'
import { getCountryData } from '../actions/gqlCalls'
import Listing from '../components/listing';
import { Bars } from 'react-loader-spinner';
import { useRouter } from 'next/router'



const Details =()=>{
  const [options, setOptions]= useState([]);
  const [selected, setSelected]=useState(null);
  const [showDiv, setShowDiv]=useState(false)
  const [responseData, setResponseData]=useState([]);
  const [dataProp,setDataProp]=useState([]);
  const [isLoading, setLoading]= useState(false);
  const router = useRouter()

  useEffect(()=>{
    setLoading(true);
    (async function getResults(){
      const data = await getCountryData();
      setOptions(data.selectionOptions);
      setResponseData(data.response);
    })();
    
  },[])
  const handleChange=(value)=>{
    setSelected(value);
  }
  useEffect(()=>{
    if(selected !==null){
        setShowDiv(true);
        setDataProp(responseData[selected.value]||[])
    }
  },[selected])
  useEffect(()=>{
  if(responseData&&responseData.length>0){
    setLoading(false)
  }
  },[responseData])

    return (
    <div className={styles.container}>
        <Paper elevation={12}>
            <main className={styles.main}>
            <Chip 
              label="Go to Home" 
              color="primary" 
              variant="outlined"
              onClick={() => router.push('/')}
            />
                <div className={styles.headdiv}>
                    {isLoading===true?(
                      <Bars color="#00BFFF" height={80} width={80} />
                    ):(
                      <>
                      <h4 className={styles.title}>
                        Search and select a country 
                      </h4>
                      <div>
                      <SearchAndSelect
                       options={options}
                       value={selected}
                       onChange={(value)=>{handleChange(value)}}
                      />
                      </div>
                      </>
                    )}
                    
                    {showDiv&&(
                         <Listing
                         data={dataProp}
                         />
                    )                     
                    }
                </div>
             </main>
        </Paper>
    </div>
    )
}
export default Details