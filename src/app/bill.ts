import { Item } from "./item";

export class Bill {
    id!: string;
    user_id!:number;
    bill_date!:Date;
    vendor_name!:string;
    items!:Item[];
    taxes!:number;
    discounts!:number;
    total_amt!:number;
    status!:string;
    client_name!:string
    client_address!:string
    

    constructor() {
        this.items = [];
      }
}
