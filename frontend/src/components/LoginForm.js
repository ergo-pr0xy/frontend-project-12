import React from 'react';
import { useFormik } from 'formik';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
    },
  });

  return (
    <Form className="col-12 col-md-6 mt-3 mt-mb-0 form-width form-center" onSubmit={formik.handleSubmit}>
      <h1>Войти</h1>
      <Form.Group className="mb-3" floating>
        <FloatingLabel className="mb-3" label="Ваш ник">
          <Form.Control 
            id="username" 
            name="username" 
            type="text" 
            placeholder="Ваш ник"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3">
        <FloatingLabel className="mb-3" label="Ваш пароль">
          <Form.Control 
            id="password" 
            name="password" 
            type="password" 
            placeholder="Ваш пароль"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit">Войти</Button>
    </Form>
  );
};

export default LoginForm;