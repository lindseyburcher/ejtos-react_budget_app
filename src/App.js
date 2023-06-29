import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';
import Currency from './components/Currency';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='col-sm'>Company's Budget Allocation</h1>
                  
                {/*<h1 className='mt-3'>Company's Budget Allocation</h1>*/}
                    <div className='row mt-2'>
                        {/* Add Budget component here under */}        
                        <div className='col-sm-auto'>
                        <Budget />
                        </div>
                        {/* Add Remaining component here under */}        
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        {/* Add ExpenseTotal component here under */}        
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                        <div className='col-sm' style={{}}>
                        <Currency />
                    </div>
                        
                        {/* Add ExpenseList component here under */} 
                    <h3 className='mt-4'>Allocation</h3> 
                    <div className='row'>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>       
                    </div>
                        {/* Add ExpenseItem component here under */}        
                        
                        {/* Add AllocationForm component here under */}        
                        <h3 className='mt-5'>Change Allocation</h3> 
                        <div className='row mt-4'>
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                        </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
