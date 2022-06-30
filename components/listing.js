import React from 'react';
import styles from '../styles/Listing.module.css'

const Listing =(props)=>{

  const {name,code, native, capital, currency, states, languages  } = props.data

return(
<div className={styles.main}>
<div className={styles.grid}>
        <div key={code} className={styles.card}>
          <h1>{name}</h1>
          {native !==''&&(<h2>{native}</h2>)}
          <h4>Code</h4>
          <p>{code}</p><br></br>
          <h4>Capital</h4>
          <p>{capital}</p><br></br>
          <h4>Currency</h4>
          <p>{currency}</p><br></br>
          <h4>Languages</h4>
          {languages.length && languages.map((l,lind)=>{return(<p key={lind}>{l}</p>)})||''}
          <br></br>
          <h4>States</h4>
            {states.length && states.map((s,sind)=>{return(<p key={sind}>{s}</p>)})||''}
        </div>
    </div>

</div>
)
}
export default Listing