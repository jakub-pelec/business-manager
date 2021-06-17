import React, { useEffect } from 'react';
import Input from '../../shared/Input/Input';
import FormCheckBox from '../../shared/Input/FormCheckBox';
import FormDatePicker from '../../shared/Input/FormDatePicker';
import FormDropzoneArea from '../../shared/Input/FormDropzoneArea';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { invoiceFormSchema } from '../../schema/invoiceFormSchema';
import { yupResolver } from '@hookform/resolvers/yup';

import classes from './InvoiceForm.module.css';
import moment from 'moment';

const InvoiceForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
        getValues,
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(invoiceFormSchema),
    });

    const onSubmit = (data) => {
        const { name, contractorName, value, date, settled, file } = data;
        const formattedDate = moment(date).format('DD-MM-YYYY');
        console.log({ name, contractorName, value, formattedDate, settled, file });
        console.log('dupa');
    };

    useEffect(() => {
        console.log(getValues());
    }, [errors]);

    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    muiInputProps={{
                        type: 'text',
                        name: 'name',
                        placeholder: 'Name',
                        ...register('name'),
                        fullWidth: true,
                    }}
                    validationError={errors.name}
                />
                <Input
                    muiInputProps={{
                        type: 'text',
                        placeholder: 'Contractor name',
                        ...register('contractorName'),
                        fullWidth: true,
                    }}
                    validationError={errors.contractorName}
                />
                <Input
                    muiInputProps={{
                        type: 'number',
                        placeholder: 'Value',
                        ...register('value'),
                        fullWidth: true,
                    }}
                    validationError={errors.value}
                />
                <FormDatePicker register={register} value={getValues().date} name="date" setValue={setValue} />

                <FormCheckBox name="settled" label="settled" value={getValues().settled} register={register} setValue={setValue} />

                <FormDropzoneArea name="file" control={control} />

                <Button type="submit" variant="contained" color="primary">
                    Submit form
                </Button>
            </form>
        </div>
    );
};

export default InvoiceForm;
