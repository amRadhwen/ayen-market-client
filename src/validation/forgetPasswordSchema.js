import * as yup from "yup";


export const forgetPasswordSchema = yup.object().shape({
    email: yup.string().email("Addresse email invalide.").required("Addresse email requise.")
})