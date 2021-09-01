public with sharing class AccountCreationController1 {
    public AccountCreationController1() {

    }
     
    @AuraEnabled(cacheable=true)
       public static Account createAccount(Account accountRecObj){

        try{
        insert accountRecObj;
        return accountRecObj;
        }
        catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }
    }
}
