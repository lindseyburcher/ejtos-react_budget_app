import React, {useContext} from 'react';
import { AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget} = useContext(AppContext);
    const {expenses} = useContext(AppContext);

    const {dispatch} = useContext(AppContext);
    const updateBudget = (nb)=> {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        
        let newbudget = parseInt(nb);
        if (newbudget > 20000){
            alert("The budget cannot exceed 20000")
            newbudget=budget;
            return
        } else if (newbudget > budget){
            newbudget = (newbudget-1)+10;
        }
        else  {
            newbudget = (newbudget+1)-10;
        }
        
        if (newbudget < totalExpenses) {
            alert("The budget cannot be lower than the current spending");
            //alert("Setting budget to "+newbudget);
            newbudget=budget;
            return
        }
        dispatch({
            type: 'SET_BUDGET',
            /*payload:(parseInt(nb)-1)+10 */
            payload: newbudget
        });
    }

    return (
        <div className='alert alert-secondary'>
            {/*<span>Budget: £{budget}</span> */}
            <span>Budget: £
                <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '5px' , size: 10}}
                onChange={(event) => updateBudget(event.target.value)}>
            </input></span>
        </div>
    );
};

export default Budget;
