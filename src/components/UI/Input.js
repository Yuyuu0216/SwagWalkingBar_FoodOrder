import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return(
        <div className={classes.input}>
            {/* htmlFor是設定id去連接他所對應的輸入 */}
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
            {/* {...props.input}此為確保輸入屬性皆應用，id也包括在內 */}
        </div>
    );
});

export default Input;