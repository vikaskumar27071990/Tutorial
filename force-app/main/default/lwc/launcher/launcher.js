import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin, CurrentPageReference } from 'lightning/navigation';

export default class Launcher extends NavigationMixin(LightningElement) {

    @track loading;

    @wire(CurrentPageReference)
    wiredPageRef() {
        this.loading = false;
    }

    open() {

        this.loading = true;

        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__otherComp'
            },
        });
    }

}