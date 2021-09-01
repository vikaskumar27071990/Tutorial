import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AttachmentUploadComponent extends LightningElement {
    @api recordId;
    
    //This method fires after files got uploaded
    handleUploadFinished(event) {
        const linkedinEntityId = this.recordId;    
        const uploadedFiles = event.detail.files;
        //show success toast message        
        const evt = new ShowToastEvent({
            title: 'File Upload Status...',
            message: uploadedFiles.length + 'file(s) uploaded successfully.',
            variant: 'success',
        });
        this.dispatchEvent(evt);

        /*dispatch this event to the parent, so that parent will take care to delegate this to 
         attachmentRelatedList component for refreshing the list with currently loaded files.
        */
         const evtCustomEvent = new CustomEvent('refreshlist', {   
            detail: {linkedEntityId}
            });
        this.dispatchEvent(evtCustomEvent);
    }
}