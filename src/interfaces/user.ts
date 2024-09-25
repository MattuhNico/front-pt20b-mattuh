type roles = "user" | "admin";

export interface IUser {
    id: number;
    name: string;
    email: string;
    addres: string;
    phone: string;
    role: roles;
    credentialId: number;
}