import React, { useState } from "react";
import emailjs from "emailjs-com";

import Contact from "./Contact";
import validate from "../../utils/utils";

const index = () => {
  const [loadState, setLoadState] = useState({
    loading: false,
    complete: false
  })
  // const [loading, setLoading] = useState(false);
  // const [complete, setComplete] = useState(false);
  const [errors, setErrors] = useState({});

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = (e) => {
    setErrors({});
    let formErrors = validate(formState);
    if (formErrors.error === false) {
      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          formState,
          process.env.EMAILJS_USER_ID
        )
        .then(
          (result) => {
            setLoadState((prevState) => {
              return {
                ...prevState,
                loading: true
            }});
            setTimeout(() => {
              setLoadState((prevState) => {
                return {
                  ...prevState,
                  complete: true
              }});
            }, 3000);
            console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Contact
      formState={formState}
      loading={loadState.loading}
      complete={loadState.complete}
      errors={errors}
      onChangeHandler={onChangeHandler}
      sendMessage={sendMessage}
    />
  );
};

export default index;
