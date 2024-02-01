import {UserRoles} from "./user-roles.ts";

export type UserType = {
    id?: string,
    name?: string,
    email?: string,
    number?: string,
    address?: string,
    location?: string,
    profile?: string,
    role: UserRoles,
}