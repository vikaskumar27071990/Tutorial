import { LightningElement,api} from 'lwc';
export default class AttachmentComponentThumbnail extends LightningElement {   
    @api recordId;   
    
    /*
        This method is handler for refreshlist event which is raised by 
        attachment-upload-component. It will search for attachment-related-list in the DOM
        and call refreshList method passing linkedEntityId as argument
    */
    delegateRefreshingAttachmentList(event) {                
        let args = JSON.parse(JSON.stringify(event.detail));
        let linkedEntityId = args.linkedinEntityId;        
        this.template.querySelector('c-attachment-related-list').refreshList(linkedEntityId);
    }
}