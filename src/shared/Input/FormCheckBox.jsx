import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const FormCheckbox = ({ name, label, innerProps, register, setValue, value }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        register(name);
    }, [register]);

    useEffect(() => {
        setChecked(value || false);
    }, [setChecked, value]);

    return (
        <FormControlLabel
            control={
                <Checkbox
                    onChange={(event) => setValue(name, event.target.checked, { shouldValidate: true, shouldDirty: true })}
                    checked={checked}
                    {...innerProps}
                />
            }
            label={label}
            labelPlacement="left"
        />
    );
};

export default FormCheckbox;
