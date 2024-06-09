import { useState } from "react";

export const useForm = ({ initialValues }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  return { formData, handleChange, resetForm };
};
