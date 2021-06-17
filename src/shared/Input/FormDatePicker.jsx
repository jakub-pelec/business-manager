import React from 'react';
import { Controller } from 'react-hook-form';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const FormDatePicker = ({ name, control }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker {...field}/>
                </MuiPickersUtilsProvider>
            )}
        />
    );
};

export default FormDatePicker;