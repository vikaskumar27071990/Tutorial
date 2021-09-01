import { LightningElement, api, track } from 'lwc';
import retrieveFiles from '@salesforce/apex/AttachmentController.retrieveFiles';

export default class AttachmentRelatedList extends LightningElement {
    @api recordId; //recordId of the record page where it is being placed
    @track results = []; //array to prepare the thumbnail type file to be shown   
    relatedListTitle; //used for preparing title e.g. Attachments (3)

    //This method is called from parent component after receiving event on files got uploaded.
    @api
    refreshList(linkedEntityId) {
        this.fetchFileData(linkedEntityId);
    }

    //if the component is used alone then it will help to retrieve file details
    connectedCallback(){
        this.fetchFileData(this.recordId);
    }

    //It fetches the files and related information
    fetchFileData(parentRecordId){
        retrieveFiles({recordId: parentRecordId})
        .then(data=> this.prepareFileRows(data))        
        .catch(err => { console.log(err) });
    }

    /*
        This method is used to prepare file data to be displayed as thumbnail with other
        information like size, format, date of loading, viewURL, downloadURL
    */
    prepareFileRows(data){
        if(data){
            //prepare title            
            this.relatedListTitle = 'Attachments (' + data.length + ')'; 
            this.results = []; //initialize the array
            //extract file data and prepare results array with converted information
            data.map(element=>{
                let fSize = this.formatFileSize(element.ContentSize);
                let fDate = this.formatDateString((element.CreatedDate).slice(0, 10));
                this.results = 
                [...this.results,
                    {
                        fileId: element.Id,
                        fileName:element.Title,
                        filePath: element.PathOnClient,
                        fileType:element.FileType,
                        fileExtn: element.FileExtension,
                        fileSize: fSize,
                        fileDate: fDate,
                        thumbnailPath: '/sfc/servlet.shepherd/version/renditionDownload?rendition=thumb120by90&versionId=' 
                                        + element.Id + '&operationContext=CHATTER&contentId=' + element.ContentDocumentId,
                        downloadUrl: '/sfc/servlet.shepherd/document/download/' + element.ContentDocumentId,
                        viewUrl: '/lightning/r/ContentDocument/' + element.ContentDocumentId + '/view'
                    }
                ]                
            }); 
        }
    }

    //This method is used to prepare date as May 16, 2021 which usally comes as YYYY-MM-DD format
    formatDateString(dateStr){
        const dt = new Date(dateStr);
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dt);
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(dt);
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dt);
        return month + ' ' + day + ', ' + year;
    }

    //This method prepare file size to be displayed in MB or KB
    formatFileSize(fileSize){
        let f = Math.abs(fileSize/1024);        
        return (f > 1024? Math.abs(fileSize/(1024 * 1024)).toFixed(2) + ' MB' 
                : Math.round(f) + ' KB');
    }
}
