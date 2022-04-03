import * as yup from "yup";


export const signinSchema = yup.object().shape({
    login: yup.string().required("Login requis."),
    password: yup.string().required("Mot de passe requis.")
});