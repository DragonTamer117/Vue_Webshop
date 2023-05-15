import {Role} from "../enums/Role";

export class User {
    protected id!: any;
    protected email!: string;
    protected password!: string;
    protected role!: Role;
    protected dateOfBirth!: Date;
    protected firstName!: string;
    protected middleName!: string;
    protected lastName!: string;
    protected street!: string;
    protected houseNr!: string;
    protected postalCode!: string;
    protected city!: string;

    constructor(id: any, email: string,
                password: string, role: Role,
                dateOfBirth: Date, firstName: string,
                middleName: string, lastName: string,
                street: string, houseNr: string,
                postalCode: string, city: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.street = street;
        this.houseNr = houseNr;
        this.postalCode = postalCode;
        this.city = city;
    }
}