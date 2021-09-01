public with sharing class AccountContactWrapper {
    @AuraEnabled(cacheable=true)
    public static list<AccountContactListWrapper> getAllAccountWithContact(){
        list<AccountContactListWrapper> accconWrapperList = new list<AccountContactListWrapper>();
        list<Account> acclist = [SELECT Id,Name,(SELECT Id,Name,FirstName,LastName,Email,MobilePhone from Contacts) from Account];
        if(!acclist.isEmpty()){
            for(Account acc : acclist){
                AccountContactListWrapper accConWrapper = new AccountContactListWrapper(); 
                accConWrapper.accRecord = acc;
                accConWrapper.contactList=acc.contacts;
                accConWrapper.contactCount = acc.contacts.size();
                accconWrapperList.add(accConWrapper);
 
 
            }
        }
        system.debug('***accconWrapperList'+accconWrapperList);
        return accconWrapperList;
 
    }
 
    //Creating a wrapper class where i will have different object as its memeber
    public class AccountContactListWrapper{
       
        @AuraEnabled
        public account accRecord{get;set;}
        @AuraEnabled
        public list<contact> contactList{get;set;}
        @AuraEnabled
        public integer contactCount{get;set;}
    }
    
}