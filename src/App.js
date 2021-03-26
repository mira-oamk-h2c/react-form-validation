import './App.css';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function App() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Minimum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Validation with Formik + Yup</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className="form-label" for="formControl1" >Full Name</label>
          <input className="form-control mb-3" id="formControl1"
            type="text"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.full_name}</p>
          )}
        </div>
        <div>
          <label className="form-label" for="formControl2">Email</label>
          <input className="form-control mb-3" id="formControl2"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label className="form-label" for="formControl3">Password</label>
          <input className="form-control mb-3"  id="formControl3"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <label className="form-label" for="formControl4">Confirm Password</label>
          <input className="form-control mb-3" id="formControl4"
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          {formik.errors.confirm_password && formik.touched.confirm_password && (
            <p>{formik.errors.confirm_password}</p>
          )}
        </div>
        <div>
          <button className="btn btn-dark" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
