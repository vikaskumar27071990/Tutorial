import { LightningElement } from 'lwc';

export default class ValidateFields1 extends LightningElement {
    validateFields1() {
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            element.reportValidity();
        });
    }
}