import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

const Userform = ({ closeModal, setUsers }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      username: '',
      address: '',
      company: '',
      website: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      username: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
      address: Yup.string().required('Required'),
      website: Yup.string().url('Must be a valid URL')
    }),
    onSubmit: (values) => {
      // Handle user creation logic here
      setUsers(prevUsers => [...prevUsers, values]);
      closeModal();
    }
  });
  return (
    <div className="form-container">
      <h2 className="form-heading">Create New User</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error-message">{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-message">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          {...formik.getFieldProps('phone')}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error-message">{formik.errors.phone}</div>
        ) : null}

        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          {...formik.getFieldProps('username')}
          disabled
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error-message">{formik.errors.username}</div>
        ) : null}

        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          {...formik.getFieldProps('address')}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="error-message">{formik.errors.address}</div>
        ) : null}

        <label htmlFor="company">Company (Optional)</label>
        <input
          id="company"
          name="company"
          type="text"
          {...formik.getFieldProps('company')}
        />
        {formik.touched.company && formik.errors.company ? (
          <div className="error-message">{formik.errors.company}</div>
        ) : null}

        <label htmlFor="website">Website (Optional)</label>
        <input
          id="website"
          name="website"
          type="url"
          {...formik.getFieldProps('website')}
        />
        {formik.touched.website && formik.errors.website ? (
          <div className="error-message">{formik.errors.website}</div>
        ) : null}

        <button type="submit">Create User</button>
      </form>
    </div>
  );
};


export default Userform;
