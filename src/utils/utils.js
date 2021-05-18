export default function validate(values) {
  console.log("validation active");
  let errors = { error: false };
  if (!values.firstName) {
    errors.firstName = "First name is required";
    errors.error = true;
  } else if (values.firstName.length > 30) {
    errors.firstName = "First name input exceeds character limit";
    errors.error = true;
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
    errors.error = true;
  } else if (values.lastName.length > 30) {
    errors.lastName = "Last name input exceeds character limit";
    errors.error = true;
  }
  if (!values.email) {
    errors.email = "Email address is required";
    errors.error = true;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
    errors.error = true;
  }
  if (!values.subject) {
    errors.subject = "Subject is required";
    errors.error = true;
  } else if (values.subject.length > 30) {
    errors.subject = "Subject input exceeds character limit";
    errors.error = true;
  }
  if (!values.message) {
    errors.message = "Message is required";
    errors.error = true;
  } else if (values.message.length > 500) {
    errors.message = "Message input exceeds character limit";
    errors.error = true;
  }
  return errors;
}
