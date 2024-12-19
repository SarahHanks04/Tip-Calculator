import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false); // Toggle for admin mode
  const [formConfig, setFormConfig] = useState([]); // Dynamic form structure

  // Fetch form structure from the backend (simulate with localStorage or API call)
  const fetchFormConfig = async () => {
    try {
      const response = await fetch("http://localhost:4000/formConfig");
      const data = await response.json();
      setFormConfig(data);
    } catch (error) {
      console.error("Error fetching form config:", error);
    }
  };

  // Save updated form structure (for admin use)
  const saveFormConfig = async (updatedConfig) => {
    try {
      await fetch("http://localhost:4000/formConfig", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedConfig),
      });
      setFormConfig(updatedConfig);
    } catch (error) {
      console.error("Error saving form config:", error);
    }
  };

  // Submit user responses
  const saveUserResponse = async (formData) => {
    try {
      await fetch("http://localhost:4000/responses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Response submitted successfully");
    } catch (error) {
      console.error("Error submitting response:", error);
    }
  };

  return (
    <FormContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        formConfig,
        fetchFormConfig,
        saveFormConfig,
        saveUserResponse,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
