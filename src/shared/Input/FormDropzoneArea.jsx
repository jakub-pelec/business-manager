import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { Controller } from 'react-hook-form';

const FormDropzoneArea = ({ name, control }) => {
    return (
        <Controller
            render={({ field }) => <DropzoneArea {...field} onChange={(files) => field.onChange(files[0])} />}
            name={name}
            control={control}
            rules={{ required: true }}
        />
    );
};

export default FormDropzoneArea;
