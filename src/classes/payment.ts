import { HasFormatter } from '../Interfaces/HasFormatter.js';

export class payment implements HasFormatter {
    constructor (
        readonly recipient : string,
        public details : string,
        public amount : number,
    ){};
    format(){
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    };

};