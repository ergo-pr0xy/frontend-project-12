import React from 'react';
import { Formik, useFormik } from 'formik';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      nickname: '',
      password: '',
    },
    onSubmit: values => {
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="nickname">Ваш ник</label>
      <input
        id="nickname"
        name="nickname"
        type="nickname"
        onChange={formik.handleChange}
        value={formik.values.nickname}
      />
      <label htmlFor="password">Ваш пароль</label>
      <input
        id="password"
        name="password"
        type="password" 
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;