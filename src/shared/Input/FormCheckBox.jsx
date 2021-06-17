import React from 'react';
import { Controller } from 'react-hook-form';
import { Checkbox } from '@material-ui/core';

const FormCheckbox = ({ name, control, label }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <div>
                    <span>{label}</span>
                    <Checkbox {...field} />
                </div>
            )}
        />
    );
};

export default FormCheckbox;
