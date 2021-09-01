public with sharing class lwcApexController3 {
    @AuraEnabled
    public static Opportunity insertAccountMethod(Opportunity accountObj){
        try {
            insert accountObj;
            return accountObj;
        } catch (Exception exp) {
            throw new AuraHandledException(exp.getMessage());
        }
    }
}