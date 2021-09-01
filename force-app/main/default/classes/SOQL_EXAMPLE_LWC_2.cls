public with sharing class SOQL_EXAMPLE_LWC_2 {
    
Public Map<String,String> accMap {set;get;}
    Public Map<Id,Account> myMap {set;get;}
    public SOQL_EXAMPLE_LWC_2(){
        List<Account> accounts=[Select Id,Name,Phone,Rating,Industry from Account];
        accMap=new Map<String,String>();
         myMap=new Map<Id,Account>();
       
        for(Account a:accounts){
           accMap.put(a.Name,a.Phone);
            myMap.put(a.Id,a);
        }
    }
    
    
}