export interface User {
    [x: string]: any;
    // first_name: string;
    // last_name: string;
    // email: string;
    // password: string;
    // confirm_password: string;
    // gender:string;
    // date_of_birth:Date;
    
    id:string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
    gender:string;
    date_of_birth:Date;
    mobile_number:number;
    token: string;

}
