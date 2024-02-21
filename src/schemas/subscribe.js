import * as yup from "yup";

const subscribeSchema = yup
  .object({
    name: yup.string().required("This field is required."),
    email: yup
      .string()
      .email("This field is not an email.")
      .required("This field is required."),
  })
  .required();

export default subscribeSchema;
