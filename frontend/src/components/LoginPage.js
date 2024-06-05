import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { authUser } from '../slices/AuthSlice.js';

const setErrorMessage = (error) => {
  switch (error) {
    case 'ERR_BAD_REQUEST':
      return 'Неверные имя пользователя или пароль';
    case 'ERR_NETWORK':
      return 'Ошибка сети';
    default:
      return 'Неопознанная ошибка';
  }
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const [currentError, setError] = useState('');

  const usernameInputEl = useRef(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async ({ username, password }) => {
      try {
        const response = await axios.post('/api/v1/login', { username, password });
        const { token, username: user } = response.data;
        dispatch(authUser({ username: user, token }));
      } catch (error) {
        setError(setErrorMessage(error.code));
      }
    },
  });

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
            isInvalid={!!currentError}
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
            isInvalid={!!currentError}
            required
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {currentError}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit">Войти</Button>
    </Form>
  );
};

export default LoginPage;
