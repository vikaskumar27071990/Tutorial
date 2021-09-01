public with sharing class PersonInfo {
    //1.Create Wrapper class Variables
public PersonInfoContainer pinfo{set;get;}

public List<PersonInfoContainer> pinfoList{set;get;}

public PersonInfo() {
//2.Crete Wrapper class object and list ['ASSING MEMORY']
pinfo=new PersonInfoContainer();
pinfoList=new List<PersonInfoContainer>();

//3.In pinfo there are 4 variables as below
//Assing Memory to all of them
pinfo.prsn=new Person__c();
pinfo.offc=new Office_Address__c();
pinfo.tempAddr=new Temp_Address__c();
pinfo.hmtnAddr=new HomeTown_Address__c();
}

//4.Create Methord And add to object List
public void addEle(){
    pinfoList.add(pinfo);   
}
}
