import React from 'react';
import { connect } from 'react-redux';
import classes from './LoginPage.module.css';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../schema/loginSchema';
import Input from '../../shared/Input/Input';
import Header from '../../shared/Header/Header';
import { login } from '../../actions/actions';

const LoginPage = ({ login: loginProps, history: { push } }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        const { email, password } = data;
        loginProps({ email, password, push });
    };

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Header>Log in</Header>
                    <Input
                        muiInputProps={{
                            type: 'text',
                            placeholder: 'email',
                            ...register('email'),
                            fullWidth: true,
                        }}
                        validationError={errors.email}
                    />
                    <Input
                        muiInputProps={{
                            placeholder: 'password',
                            type: 'password',
                            ...register('password'),
                            fullWidth: true,
                        }}
                        validationError={errors.password}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default connect(null, { login })(LoginPage);
