import * as yup from 'yup';

export const invoiceFormSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    contractorName: yup.string().required('Contractor name is required'),
    value: yup.number().required('Value is required'),
    date: yup.date().required('Date is required'),
    settled: yup.bool().required('Is settled is required'),
    file: yup.mixed().required('A file is required'),
});
