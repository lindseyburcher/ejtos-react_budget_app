import React, {useContext, useState } from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const { currency} = useContext(AppContext);
    
    const [action, setAction] = useState('');

    return (
        <div className='alert alert-success'>
            <span>Currency  
            <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        
                <option defaultValue value="£ Pound" name="GBP">£ Pound</option>
                <option value="$ Dollar" name="USD">$ Dollar</option>
                <option value="€ Euro" name="USD">€ Euro</option>
                <option value="₹ Ruppee" name="USD">₹ Ruppee</option>
            </select>
            </span>
        </div>
    );
};
export default Currency;