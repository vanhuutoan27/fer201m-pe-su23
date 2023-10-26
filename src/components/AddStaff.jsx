import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

function AddStaff() {
  const url = 'https://65375a84bb226bb85dd31896.mockapi.io/api/v1/staffManagement';

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      address: '',
      avatar: '',
      createdAt: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(2, 'Must be 2 characters or more'),
      age: Yup.number().required('Age is required').integer('Age must be an integer'),
      address: Yup.string().required('Address is required'),
      avatar: Yup.string().url('Avatar must be a valid URL'),
      createdAt: Yup.string().required('CreatedAt is required'),
    }),

    onSubmit: (values) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Server response:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  });

  return (
    <div className="content" style={{ padding: '100px 0', width: '800px' }}>
      <h1>Add New Staff</h1>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={5}>
            <TextField
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              fullWidth
              style={{ marginBottom: '12px' }}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name ? formik.errors.name : ''}
            />
          </Grid>

          <Grid item xs={5}>
            <TextField
              label="Age"
              name="age"
              type="number"
              value={formik.values.age}
              onChange={formik.handleChange}
              fullWidth
              style={{ marginBottom: '12px' }}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age ? formik.errors.age : ''}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="CreatedAt"
              name="createdAt"
              value={formik.values.createdAt}
              onChange={formik.handleChange}
              fullWidth
              style={{ marginBottom: '12px' }}
              error={formik.touched.createdAt && Boolean(formik.errors.createdAt)}
              helperText={formik.touched.createdAt ? formik.errors.createdAt : ''}
            />
          </Grid>
        </Grid>

        <TextField
          label="Address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          fullWidth
          style={{ marginBottom: '12px' }}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address ? formik.errors.address : ''}
        />

        <TextField
          label="Avatar"
          name="avatar"
          value={formik.values.avatar}
          onChange={formik.handleChange}
          fullWidth
          style={{ marginBottom: '12px' }}
          error={formik.touched.avatar && Boolean(formik.errors.avatar)}
          helperText={formik.touched.avatar ? formik.errors.avatar : ''}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            float: 'right',
            marginTop: '2%',
            marginRight: '4%',
            padding: '12px 64px',
            backgroundColor: '#000',
            color: '#fff',
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddStaff;
