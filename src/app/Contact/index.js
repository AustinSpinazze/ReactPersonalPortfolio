import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

import Contact from "./Contact";
import validate from "../../utils/utils";
import { Redirect } from "react-router";

const index = () => {
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [errors, setErrors] = useState({});

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setComplete(true);
    }, 10000);
  }, [loading]);

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
      setLoading(true);
      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          formState,
          process.env.EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log(formErrors);
      setErrors(formErrors);
    }
  };

  return (
    <Contact
      formState={formState}
      loading={loading}
      complete={complete}
      errors={errors}
      onChangeHandler={onChangeHandler}
      sendMessage={sendMessage}
    />
  );
};

export default index;
