import { LightningElement } from 'lwc';
import  {si,add} from 'c/utility';
export default class SharedMisc extends LightningElement {
    constructor(){
        super();
        const s=(1000,1,10);
        console.log('=====>', s);
    }
}