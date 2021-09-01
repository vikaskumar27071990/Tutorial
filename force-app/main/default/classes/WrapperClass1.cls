public with sharing class WrapperClass1 {
    
    public WrapperClass1() { }

    @AuraEnabled(cacheable=true)
    public static List<wrapp1> getWrapperList() {
        List<wrapp1> wrapperList = new List<wrapp1>();
            for(Contact con : [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 5]){
                wrapp1 obj = new wrapp1(false,con);
                wrapperList.add(obj);
            }
        return wrapperList;
    }


    public class wrapp1{
        @AuraEnabled
        public Contact con{get;set;}
        @AuraEnabled
        public boolean selected{get;set;}
    
        public wrapp1(boolean selected,Contact con){
            this.con = con;
            this.selected = selected;            
        }
    }
}
