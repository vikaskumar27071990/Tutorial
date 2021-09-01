
public with sharing class List_Example_one {
    public Account acc {set;get;}
    public List<Account> accList{set;get;}
    
    
    public List_Example_one() {
        acc=new Account();
        accList=new List<Account>();
    }
    
    public  void addMe(){
        accList.add(acc);
        acc=new Account();
      }
      
     // public void clear(){ accList.clear(); }
}
