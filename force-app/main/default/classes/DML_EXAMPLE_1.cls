public with sharing class DML_EXAMPLE_1 {
   
    public DML_EXAMPLE_1() {}
    @AuraEnabled
    public String accName   {set;get;}
    @AuraEnabled
    public String phone  {set;get;}
    @AuraEnabled
    public String industry  {set;get;}
    @AuraEnabled
    public String  rating  {set;get;}
    
    @AuraEnabled
    public PageReference create(){
        Integer count=[Select count() from Account where name=:accName];
        PageReference p;
    
    
    if(count>0){
        Apexpages.Message msg=new Apexpages.Message(Apexpages.Severity.ERROR,'Duplicate Record Exists');
        Apexpages.addMessage(msg);
    }
    else{
        Account acc=new Account();
        acc.Name=accName;
        acc.Phone=phone;
        acc.Industry=industry;
        acc.Rating=rating;
        insert acc;
        p=new PageReference('/'+acc.Id);
    }
    return p;
}

}

