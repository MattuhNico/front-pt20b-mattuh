"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { validateEmail, validatePassword, validateAddress, validatePhone } from "@/helpers/validation";
import { RegisterForm as Data } from "@/interfaces/forms";
import { useRouter } from "next/navigation";
import { registerService } from "@/services/authServices";

const RegisterForm = () => {
  const router = useRouter();
  const initialData: Data = {name: "",email: "", password: "", address:"", phone: "" };
  const initialDirty = {email: false, password: false, address: false, phone: false };
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);

  const handleSubmit = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await registerService(apiUrl + "/users/register", data);
    if (!response.message) {
      alert("You are Registered!");
      router.back();
    } else {
      alert(response.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true });
  };

  useEffect(() => {
    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
      address: validateAddress(data.address),
      phone: validatePhone(data.phone)
    });
  }, [data]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/2 mx-auto pt-8 gap-4"
    >
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={data.email}
        placeholder="email@email.com"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {dirty.email ? <p className="text-red-600">{errors.email}</p> : null}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={data.password}
        placeholder="Por lo menos 8 letras"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {dirty.password ? (
        <p className="text-red-600">{errors.password}</p>
      ) : null}
      <label htmlFor="address">Dirección</label>
      <input
        type="text"
        id="address"
        name="address"
        value={data.address}
        placeholder="Por lo menos 8 letras"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {dirty.address ? <p className="text-red-600">{errors.address}</p> : null}
      <label htmlFor="phone">Teléfono</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={data.phone}
        placeholder="Por lo menos 8 letras"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {dirty.phone ? <p className="text-red-600">{errors.phone}</p> : null}
      <Button variant="secondary">Login</Button>
    </form>
  );
};

export default RegisterForm;
