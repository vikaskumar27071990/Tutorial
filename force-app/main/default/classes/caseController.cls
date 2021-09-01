public with sharing class caseController {
public caseController() {

}

@AuraEnabled(cacheable=true)
public static List<Case> getAllCases(){

List<Case> caseList=[Select Id,Subject,Status,Description,Origin from Case];
return caseList;
}
}
