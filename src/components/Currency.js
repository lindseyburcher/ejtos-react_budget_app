import React, {useContext } from 'react';
import {AppContext} from '../context/AppContext';


const Currency = () => {
    const {dispatch } = useContext(AppContext);

    const changeCurrency = (nc) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: nc,
        })
    }

    return (
        <div className='alert alert-success' style={{width:'180px',textAlign: "right",backgroundColor:'lightgreen',padding:'5px'}}>
        {/*<label style={{marginLeft: '1rem' , backgroundColor:'lightgreen', color:'white'}} >Currency */}
      <select className="custom-select" id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{backgroundColor:'lightgreen', color:'white',border:'none',padding:'0px'}}>
        <option disable selected hidden value="£">Currency (£ Pound)</option>   
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}} value="₹">₹ Rupee</option>
      </select>	
      {/*</label>*/}
      	
    </div>
    );
};
export default Currency;