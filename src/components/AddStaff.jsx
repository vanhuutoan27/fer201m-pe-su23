import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';

function AddStaff() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      program: 0,
      message: '',
      agree: false,
      avatar: '', // Add Avatar field
      createdAt: '', // Add CreatedAt field
    },
    
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(2, 'Must be 2 characters or more'),
      email: Yup.string().required('Email is required').email('Invalid email'),
      phone: Yup.number().integer().typeError('Please enter a valid number'),
      program: Yup.number().integer().typeError('Please select a program.'),
      message: Yup.string().required('Message is required').min(10, 'Must be 10 characters or more'),
      agree: Yup.boolean().oneOf([true], 'The terms and conditions must be accepted'),
      avatar: Yup.string().url('Avatar must be a valid URL'), // Validation for Avatar
      createdAt: Yup.string().required('CreatedAt is required'), // Validation for CreatedAt
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values)); // Convert to JSON string and show in an alert box.
    },
  });

  return (
    <div className="content" style={{ padding: '100px 0' }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <Typography variant="caption" color="error">
            {formik.errors.name}
          </Typography>
        )}

        <TextField
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <Typography variant="caption" color="error">
            {formik.errors.email}
          </Typography>
        )}

        <TextField
          label="Phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && (
          <Typography variant="caption" color="error">
            {formik.errors.phone}
          </Typography>
        )}

        <FormControl sx={{ m: 1, minWidth: 600 }}>
          <InputLabel id="program-label">Program of Study</InputLabel>
          <Select
            labelId="program-label"
            name="program"
            value={formik.values.program}
            onChange={formik.handleChange}
          >
            <MenuItem value={0}>
              <em>Please select</em>
            </MenuItem>
            <MenuItem value={1}>Software Engineering</MenuItem>
            <MenuItem value={2}>Information System</MenuItem>
            <MenuItem value={3}>Information Assurance</MenuItem>
            <MenuItem value={4}>Internet of Things</MenuItem>
            <MenuItem value={5}>Artificial Intelligence</MenuItem>
            <MenuItem value={6}>Digital Art & Design</MenuItem>
          </Select>
        </FormControl>
        {formik.errors.program && (
          <Typography variant="caption" color="error">
            {formik.errors.program}
          </Typography>
        )}

        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.errors.message && (
          <Typography variant="caption" color="error">
            {formik.errors.message}
          </Typography>
        )}

        <FormControlLabel
          control={<Switch />}
          label="Agree to terms and conditions."
          name="agree"
          checked={formik.values.agree}
          onChange={formik.handleChange}
        />
        {formik.errors.agree && (
          <Typography variant="caption" color="error">
            {formik.errors.agree}
          </Typography>
        )}

        <TextField
          label="Avatar"
          name="avatar"
          value={formik.values.avatar}
          onChange={formik.handleChange}
        />
        {formik.errors.avatar && (
          <Typography variant="caption" color="error">
            {formik.errors.avatar}
          </Typography>
        }

        <TextField
          label="CreatedAt"
          name="createdAt"
          value={formik.values.createdAt}
          onChange={formik.handleChange}
        />
        {formik.errors.createdAt && (
          <Typography variant="caption" color="error">
            {formik.errors.createdAt}
          </Typography>
        }

        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </div>
  );
}

export default AddStaff;
