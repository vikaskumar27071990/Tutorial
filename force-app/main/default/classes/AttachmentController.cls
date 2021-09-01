public with sharing class AttachmentController {
    
    //cacheable is omitted otherwise we will not get refreshed data upon uploading
    @AuraEnabled
    public static List<ContentVersion> retrieveFiles(String recordId){
        //get records from ContentDocumentLink based on LinkedEntityId
                List<ContentDocumentLink> cdlList = [SELECT ContentDocumentId  
                FROM ContentDocumentLink 
                WHERE LinkedEntityId =: recordId];

        List<Id> cdIds = new List<Id>(); //ContentDocumentIds
        for(ContentDocumentLink obj: cdlList){
            cdIds.add(obj.ContentDocumentId);
        }
        //get records from ContentVersion based on ContentDocumentIds
        List<ContentVersion> cvList = [SELECT Id, ContentDocumentId, ContentUrl, 
                VersionNumber, Title, PathOnClient, 
                FileType, FileExtension, ContentSize,
                CreatedDate 
            FROM ContentVersion 
            WHERE ContentDocumentId IN:cdIds];
        return cvList;        
    }    
}
