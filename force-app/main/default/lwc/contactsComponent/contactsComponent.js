import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import AngularResource from '@salesforce/resourceUrl/AngularResource ';
export default class ContactsComponent extends LightningElement {
    renderedCallback() {
        Promise.all([
            loadScript(this, AngularResource )
        ])
            .then(() => {
                alert('Files loaded.');
            })
            .catch(error => {
                alert(error.body.message);
            });
    }  
}