public class wrapp{
    @AuraEnabled
    public Contact con{get;set;}
    @AuraEnabled
    public boolean selected{get;set;}

    public wrapp(boolean selected,Contact con){
        this.con = con;
        this.selected = selected;            
    }
}