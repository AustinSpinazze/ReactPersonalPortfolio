import React from "react";
import { Fragment } from "react";

import Button from "../common/Button/Button";
import Loader from "../common/Loaders";
import "./contact.css";

const Contact = ({
  formState,
  loading,
  onChangeHandler,
  sendMessage,
  errors,
  complete,
}) => {
  console.log(loading, complete);
  return (
    <Fragment>
      {loading ? (
        <div className="loader-container">
          <Loader loader="contact-load" complete={complete} />
          {complete ? (
            <Fragment>
              <p className="complete-message">Message Sent</p>
              <Button
                className="link-button"
                type="linkButton"
                path="/"
                name="Finish"
              />
            </Fragment>
          ) : null}
        </div>
      ) : (
        <div className="contact-container animate fade-up">
          <div className="contact-header">
            <div>
              <h1>Contact</h1>
            </div>
            <div>
              <h2>Me</h2>
            </div>
            <div className="contact-loader">
              <Loader loader={"contact"} />
            </div>
            <div className="contact-info">
              <p>Contact Info: austin.spinazze@austinspinazze.dev</p>
            </div>
          </div>
          <div className="contact-fields">
            <input
              className={
                errors.firstName !== undefined
                  ? "contact-text-field error"
                  : "contact-text-field"
              }
              placeholder="First Name"
              type="text"
              onChange={onChangeHandler}
              name="firstName"
              value={formState.firstName}
              required
              maxLength={30}
            />
            {errors.firstName !== undefined ? (
              <p className="error-message">{errors.firstName}</p>
            ) : null}
            <input
              className={
                errors.lastName !== undefined
                  ? "contact-text-field error"
                  : "contact-text-field"
              }
              placeholder="Last Name"
              type="text"
              onChange={onChangeHandler}
              name="lastName"
              value={formState.lastName}
              required
              maxLength={30}
            />
            {errors.lastName !== undefined ? (
              <p className="error-message">{errors.lastName}</p>
            ) : null}
            <input
              className={
                errors.email !== undefined
                  ? "contact-text-field error"
                  : "contact-text-field"
              }
              placeholder="Contact Email"
              type="text"
              onChange={onChangeHandler}
              name="email"
              value={formState.email}
              required
              maxLength={30}
            />
            {errors.email !== undefined ? (
              <p className="error-message">{errors.email}</p>
            ) : null}
            <input
              className={
                errors.subject !== undefined
                  ? "contact-text-field error"
                  : "contact-text-field"
              }
              placeholder="Subject"
              type="text"
              onChange={onChangeHandler}
              name="subject"
              value={formState.subject}
              required
              maxLength={30}
              autoComplete="false"
            />
            {errors.subject !== undefined ? (
              <p className="error-message">{errors.subject}</p>
            ) : null}
            <textarea
              className={
                errors.message !== undefined
                  ? "contact-text-area error"
                  : "contact-text-area"
              }
              placeholder="Message"
              onChange={onChangeHandler}
              name="message"
              value={formState.message}
              required
              maxLength={300}
            />
            {errors.message !== undefined ? (
              <p className="error-message">{errors.message}</p>
            ) : null}
            <div className="contact-send">
              <Button
                type="sendForm"
                className="link-button"
                name="Send"
                onClick={sendMessage}
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Contact;
