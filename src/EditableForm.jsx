import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FormContext } from "./FormProvider";

const EditableForm = () => {
  const {
    isAdmin,
    formConfig,
    fetchFormConfig,
    saveFormConfig,
    saveUserResponse,
  } = useContext(FormContext);

  const [editableConfig, setEditableConfig] = useState([]);

  useEffect(() => {
    fetchFormConfig();
  }, [fetchFormConfig]);

  useEffect(() => {
    setEditableConfig(formConfig);
  }, [formConfig]);

  const handleSave = () => {
    saveFormConfig(editableConfig);
  };

  return (
    <div className="p-4 w-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {isAdmin ? "Edit Form" : "Feedback & Complaint Form"}
      </h1>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          saveUserResponse(values);
        }}
      >
        {({ values }) => (
          <Form className="space-y-4">
            {editableConfig.map((field, index) => (
              <div key={index} className="space-y-2">
                <label className="block text-lg font-semibold">
                  {isAdmin ? (
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) => {
                        const updatedConfig = [...editableConfig];
                        updatedConfig[index].label = e.target.value;
                        setEditableConfig(updatedConfig);
                      }}
                      className="border p-2 rounded w-full"
                    />
                  ) : (
                    field.label
                  )}
                </label>
                {field.type === "text" && (
                  <Field
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    className="border w-full p-2 rounded"
                  />
                )}
                {field.type === "textarea" && (
                  <Field
                    as="textarea"
                    name={field.name}
                    placeholder={field.placeholder}
                    className="border w-full p-2 rounded"
                  />
                )}
                {field.type === "select" && (
                  <Field
                    as="select"
                    name={field.name}
                    className="border w-full p-2 rounded"
                  >
                    {field.options.map((option, optIndex) => (
                      <option key={optIndex} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                )}
              </div>
            ))}
            {isAdmin ? (
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Save Form Config
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded"
              >
                Submit
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditableForm;
