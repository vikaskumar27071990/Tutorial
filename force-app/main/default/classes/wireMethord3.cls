public with sharing class wireMethord3 {
    public wireMethord3() {

    }
    
    @AuraEnabled(cacheable=true)
        public static List<Case> getAllCases(String subject){
        try {
         String key='%'+subject+'%';
       List<Case> caseList= [Select Status,Origin,Id,Subject,Description from Case where Subject Like:key];
       /*eg:
       where Subject Like:'maintaince'

       case 1: Case name is Maintaince 1

       case n: Case name is Maintaince n
       */
        return caseList; 
        }
        catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
