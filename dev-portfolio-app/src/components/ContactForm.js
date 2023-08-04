import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        [name]: 'This field is required',
      }));
    } else {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        [name]: '',
      }));
    }
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  
    if (value.trim() === '') {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        [name]: 'This field is required',
      }));
    } else {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        [name]: isValidEmail ? '' : 'Invalid email address',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      // Handle form submission here, e.g., send data to the server
      console.log('Form submitted:', formData);
      // Clear the form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } else {
      // Throw an alert with each error message
      Object.values(errors).forEach((error) => alert(error));
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email address';
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <div id="contact" className="bg-slate-600 py-24 px-8">
      <h2 className="text-white text-4xl sm:text-7xl">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label className="text-white" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="px-3 py-2 w-full border rounded"
          />
          {formErrors.name && <span className="text-red-500">{formErrors.name}</span>}
        </div>
        <div className="my-3">
          <label className="text-white" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            required
            className="px-3 py-2 w-full border rounded"
          />
          {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
        </div>
        <div className="my-3">
          <label className="text-white" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="px-3 py-2 w-full border rounded"
          />
          {formErrors.message && <span className="text-red-500">{formErrors.message}</span>}
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;