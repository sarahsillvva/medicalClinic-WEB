import { Patient } from "./patient";

export class Doctor{
    id!: number;
    name!: string;
    crm!: string;
    especialition!: string;
    dtBirth!: Date;
    phone!: string;
    address!: string;
    patient!: Patient;

    constructor(doctor: Doctor= {} as Doctor){
        Object.assign(this, Doctor);
    }
    

}