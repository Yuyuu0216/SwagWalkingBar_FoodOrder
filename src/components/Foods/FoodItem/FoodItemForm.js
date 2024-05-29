import { useRef, useState } from 'react';
import classes from './FoodItemForm.module.css';
import Input from '../../UI/Input';


const FoodItemForm = (props) => {
    const amountInputRef =useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        //因為ref提取的值不管type為何，都是字串，所以透過此方法可以把他轉為數字
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            {/* 雙括號是因為input的必須為物件(先JS語法，再物件) */}
            <Input 
                ref={amountInputRef}
                label="數量"
                input={{
                id : 'amount_' + props.id,
                type : 'number',
                min : '1',
                max : '5',
                step : '1',
                defaultValue : '1'
            }}/>
            <button>+ 新增</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default FoodItemForm;