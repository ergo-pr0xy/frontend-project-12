import React, { useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../slices/AuthSlice.js';

const LoginPage = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const usernameInputEl = useRef(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }) => {
      usernameInputEl.current.focus();
      dispatch(authUser({ username, password }));
    },
  });

  if (token && !errorMessage) {
    return (
      <Navigate to="/" />
    );
  }

  return (
    <Form className="col-12 col-md-6 mt-3 mt-mb-0 center form-size" onSubmit={formik.handleSubmit}>
      <h1>Войти</h1>
      <Form.Group className="mb-3" floating>
        <FloatingLabel className="mb-3" label="Ваш ник">
          <Form.Control
            id="username"
            name="username"
            type="text"
            placeholder="Ваш ник"
            ref={usernameInputEl}
            onChange={formik.handleChange}
            value={formik.values.username}
            isInvalid={!!errorMessage}
            required
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
            isInvalid={!!errorMessage}
            required
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {errorMessage}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit">Войти</Button>
    </Form>
  );
};

export default LoginPage;
