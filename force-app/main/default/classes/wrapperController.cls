public class wrapperController {
    @AuraEnabled(cacheable=true)
    public static List<wrapperClass> getWrapperClassList() {
        List<wrapperClass> wrapperList = new List<wrapperClass>();
        for(Account acc: [select id, name from Account limit 5]){
            wrapperClass wc = new wrapperClass();
            wc.accountName = acc.name;
            wc.accountId = acc.Id;
            wrapperList.add(wc);
        }
        
        return wrapperList;
    }
    
    public class wrapperClass{
        @AuraEnabled public String accountName;
        @AuraEnabled public String accountId;
    }
}