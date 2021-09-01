public with sharing class creatingAccountUsingAccountController {
    //CONSTRUCTOR
    public creatingAccountUsingAccountController() {}

    //Creating Methord
    @AuraEnabled
    public static Account createAccount(Account accountRecordData){
        try {
            insert accountRecordData;
            return accountRecordData;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}



/*
public with sharing class AccountCreationController {
    public AccountCreationController() {

    }
    @AuraEnabled
    public static Account createAccount(Account accountRecObj){
        try{
            insert accountRecObj;
            return accountRecObj;
        }
        catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());

        }
    }
    @AuraEnabled
    public static List<Account> createAccounts(List<Account> accountList){
        insert accountList;
        return accountList;
    }

    
}
*/