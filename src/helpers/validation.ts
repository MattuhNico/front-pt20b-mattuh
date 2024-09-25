export const validateEmail = (email: string) => {
  let validation = "";

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) validation = "Email incorrecto";

  return validation;
};

export const validatePassword = (password: string) => {
  let validation = "";

  const regexPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regexPassword.test(password)) validation = "Password incorrecto";

  return validation;
};
export const validateAddress = (address: string) => {
  let validation = "";

  const regexAddress =
    /.{8}/;
  if (!regexAddress.test(address)) validation = "Dirección incorrecto";

  return validation;
};
export const validatePhone = (phone: string) => {
  let validation = "";

  const regexPhone = /.{8}/;
  if (!regexPhone.test(phone)) validation = "Teléfono incorrecto";

  return validation;
};


