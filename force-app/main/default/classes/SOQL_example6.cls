public with sharing class SOQL_example6 {
    @AuraEnabled
    public List<Account> accounts {set;get;}
    public SOQL_example6() {
accounts=[select Name,Phone,Industry,(select LastName,firstName from contacts) from Account];
    }
}
