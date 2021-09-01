import { LightningElement } from 'lwc';

export default class HtmlEventsBasic extends LightningElement {

    message ='Welcome KUMARTECH7.0 !!';

    handleChange(event){
        const val = event.target.value;
        const lbl = event.target.label;
        console.log(' Value is '+val + ' Label is ', lbl);
    }


}