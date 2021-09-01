import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class ComponentClass extends NavigationMixin(LightningElement) {
    navigateToNewOpportunity() {
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Account',
            actionName: 'new'
        }
    });
}
}