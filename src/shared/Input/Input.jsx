import React from 'react';
import { TextField } from '@material-ui/core';
import classes from './Input.module.css';

const Input = React.forwardRef(({ muiInputProps, validationError }, ref) => {
    return (
        <div className={classes.container}>
            <TextField
                ref={ref}
                {...muiInputProps}
                error={!!validationError}
                inputProps={{
                    className: `${muiInputProps.className} ${classes.input}`,
                }}
            />
            {!!validationError && (
                <div className={classes.error}>{validationError.message}</div>
            )}
        </div>
    );
});


export default Input;
