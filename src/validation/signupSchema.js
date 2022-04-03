import * as yup from "yup";

const phoneReg = /^[0-9]{8}$/;

export const signupSchema = yup.object().shape({
    firstName: yup.string().required("Entrez votre nom"),
    lastName: yup.string().required("Entrez votre prénom"),
    email: yup.string().email("Addresse email invalide.").required("Entrez votre addresse email"),
    password: yup.string().required("Entrez un mot de passe").min(8, "Mot de passe trop court").max(20, "Mot de passe trop long"),
    rpassword: yup.string().required("Répétez le mot de passe").oneOf([yup.ref("password"), null], "Mots de passes doivent êtres identique"),
    tel: yup.string().matches(phoneReg, "Numero de téléphone invalide.").required("Entrez votre téléphone"),
    prov: yup.string().required("Selectionnez votre province"),
    addr: yup.string().required("Entrez votre addresse"),
    zip: yup.number("Code postal incorrect").positive("Code  postal incorrect").integer("Code postal incorrect").required("Entrez votre code postal").min(1000, "Code postal incorrect").max(9199, "Code postal incorrect"),
    birthDate: yup.date("Date de naissance invalide.").required("Entrez votre date de naissance")
})