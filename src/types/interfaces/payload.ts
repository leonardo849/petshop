import { Role } from "../../../generated/client.js";

export interface IPayload {
    id: string;
    email: string;
    role: Role | "CUSTOMER"
    updatedAt: Date
}