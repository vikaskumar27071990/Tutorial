public with sharing class WrapperClass {

    @AuraEnabled(cacheable=true)
    public static List<wrapp> getWrapperList() {
        List<wrapp> wrapperList = new List<wrapp>();
            for(Contact con : [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 100]){
                wrapp obj = new wrapp(false,con);
                wrapperList.add(obj);
            }
        return wrapperList;
    }

}