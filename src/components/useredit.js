import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserEdit = ({ user, closeModal, setUsers }) => {
  const formik = useFormik({
    initialValues: {
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      username: user.username || '',
      address: user.address || '',
      company: user.company || '',
      website: user.website || ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      username: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
      address: Yup.string().required('Required'),
      company: Yup.string().min(2, 'Must be 2 characters or more'),
      website: Yup.string().url('Must be a valid URL')
    }),
    onSubmit: (values) => {
      // Update the user in the state
      setUsers(prevUsers => prevUsers.map(u => u.id === user.id ? { ...u, ...values } : u));
      closeModal();
    }
  });

  return (
    <div className="form-container">
      <h2 className="form-heading">Edit User</h2>
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
          type="text"
          {...formik.getFieldProps('phone')}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error-message">{formik.errors.phone}</div>
        ) : null}


        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UserEdit;
