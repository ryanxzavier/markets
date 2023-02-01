import { Formik, Field, Form } from 'formik';
import styles from '../styles/login-form.module.css'

const LoginForm = () => {
    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className="display-6 mb-3">Login / SignUp</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}

                onSubmit={(
                    values,
                    { setSubmitting }
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}

            >
                <Form>
                    <div className="mb-3">
                        <Field className="form-control" id="username" name="username" placeholder="Username" aria-describedby="usernameHelp" />
                    </div>

                    <div className="mb-3">
                        <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;
