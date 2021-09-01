public with sharing class CloseCaseController {
public CloseCaseController() {}

@AuraEnabled(cacheable=true)
public static List<Case> getClosedCases(){
    List<case> caseList=new List<case>();

    try{
    caseList=[SELECT Id,CaseNumber,Subject,Status FROM Case WHERE Status ='Closed' limit 10];
    }
catch(Exception e){
throw new AuraHandledException(e.getMessage());
}

    return caseList;
}


public class casewrapper{
@AuraEnabled
public case caseRecord {get;set;}

@AuraEnabled
public Boolean isSelected{get;set;}

}


}
