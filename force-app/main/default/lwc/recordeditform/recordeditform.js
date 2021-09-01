import {
    LightningElement,
    api,track
} from 'lwc';

export default class Recordeditform extends LightningElement {
    @track contactId;
    handleSuccess(event) {
        this.contactId = event.detail.id;
    }

}