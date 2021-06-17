import React, { useState, useEffect } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const FormDatePicker = ({ register, value, name, setValue }) => {
    const [date, setDate] = useState(null);

    useEffect(() => {
        register(name);
    }, [register]);

    useEffect(() => {
        setDate(value || null);
    }, [setDate, value]);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker value={date} onChange={(date) => setValue(name, date, { shouldValidate: true, shouldDirty: true })} />
        </MuiPickersUtilsProvider>
    );
};

export default FormDatePicker;
