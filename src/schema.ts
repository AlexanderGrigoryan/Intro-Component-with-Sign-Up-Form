import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required("First Name cannot be empty"),
    lastName: yup.string().required("Last Name cannot be empty"),
    email: yup.string().required("Email address cannot be empty").email("Looks like this is not an email"),
    password: yup.string().required("Password cannot be empty ")
})

export default schema; 