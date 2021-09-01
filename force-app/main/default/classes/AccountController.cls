public with sharing class AccountController {
    public String oppId{get;set;}
    public Opportunity actObj{get;set;}
    public AccountController() {
        actObj = new Opportunity();
    }  
    @AuraEnabled(cacheable=true)    
    public static List<Opportunity> getAccounts(){
        return [select id,name,StageName,CloseDate,BDS__c,BDS_Email_Address__c,Solicitation_Number__c, 
        Agency__c,Office__c,Lowest_Sub_Tier__c,Notice_Type__c from Opportunity limit 10];
    }
    @AuraEnabled
    public static List<Opportunity> getAccountRecordsList(){
        //return [select id,name,type,phone,industry from Account limit 10];
        return [select id,name,StageName,CloseDate,BDS__c,BDS_Email_Address__c,Solicitation_Number__c, 
        Agency__c,Office__c,Lowest_Sub_Tier__c,Notice_Type__c from Opportunity limit 10];
    }
    public pageReference retrieveAccountDetail(){
        if(oppId!=null){
            actObj= [select id,name,StageName,CloseDate,BDS__c,BDS_Email_Address__c,Solicitation_Number__c, 
        Agency__c,Office__c,Lowest_Sub_Tier__c,Notice_Type__c from Opportunity 
        where id=:oppId
        ];
            // actObj = [select id,name,type,industry from Account where id=:accountId];
            
        }       
		return null;        
    }

}