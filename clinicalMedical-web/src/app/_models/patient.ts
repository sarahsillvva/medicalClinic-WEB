export class Patient{
    id!: number;
    name!: string;
    cpf!: string;
    dtCreation!: Date;
    dtBirth!: string;
    phone!: string;
    address!: string;


    constructor(patient: Patient= {} as Patient){
        Object.assign(this, Patient);
    }
    

}