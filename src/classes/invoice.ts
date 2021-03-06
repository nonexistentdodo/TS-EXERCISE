import { HasFormatter } from '../Interfaces/HasFormatter.js';

export class invoice implements HasFormatter {
    constructor (
        readonly client : string,
        public details : string,
        public amount : number,
    ){};
    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`;
    };

};