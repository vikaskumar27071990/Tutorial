import {LightningElement, wire, track} from 'lwc';
import getContacts from '@salesforce/apex/LWCDataTableSortingExample.getContacts';

// datatable columns with row actions. Set sortable = true
const columns = [ { label: 'FirstName', fieldName: 'FirstName', sortable: "true"},
                  { label: 'LastName', fieldName: 'LastName', sortable: "true"},
                  { label: 'Phone', fieldName: 'Phone', type: 'phone', sortable: "true"},
                  { label: 'Email', fieldName: 'Email', type: 'email', sortable: "true" },];

export default class DataTableSortingLWC extends LightningElement {
    @track data;
    @track columns = columns;
    @track sortBy='FirstName';
    @track sortDirection='asc';
  
    // retrieving the data using wire service
    @wire(getContacts,{field : '$sortBy',sortOrder : '$sortDirection'})
    contacts(result) {
        if (result.data) {
            this.data = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.data = undefined;
        }
    }
    doSorting(event) {
        // calling sortdata function to sort the data based on direction and selected field
        this.sortBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;
    }
}
