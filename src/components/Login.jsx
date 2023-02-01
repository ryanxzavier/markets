import { Formik, Field } from 'formik';
import styles from '../styles/login-form.module.css'
import React from 'react';
import users from '../database/users.json'
import Markets from '../pages/markets'

const LoginForm = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        setUsers(users.users);
    }, []);

    const [mode, setMode] = React.useState('login');

    function handleLogin(values) {
        const user = users.map(
            u => u.username === values.username && u.password === values.password
        );

        if (user) {
            console.log('Login successful!');
        } else {
            console.log('Login failed. Incorrect username or password.');
        }
    }

    function handleSignUp(values) {
        const newUser = {
            username: values.username,
            password: values.password,
        };

        users.push(newUser);
        console.log('Signup successful!')
    }

    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className="display-6 mb-3">{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={mode === 'login' ? handleLogin : handleSignUp}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Field className="form-control" id="username" name="username" placeholder="Username" />
                        </div>

                        <div className="mb-3">
                            <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            {mode === 'login' ? 'Login' : 'Sign Up'}
                        </button>
                        <br />
                        <br />
                        <button
                            type="button"
                            className="btn btn-link"
                            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                        >
                            {mode === 'login' ? 'Sign Up' : 'Login'}
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
