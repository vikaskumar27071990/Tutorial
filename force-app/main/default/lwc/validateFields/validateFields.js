import { LightningElement } from 'lwc';

export default class ValidateFields extends LightningElement {
    validateFields() {
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            element.reportValidity();
        });
    }
}