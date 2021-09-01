
public class ContactController1 {
    public ContactController1() {}
    @AuraEnabled(cacheable=true)
    public static Map<String, List<ContactWrapper>> getData() {
        Map<String, List<ContactWrapper>> mapModule = new Map<String, List<ContactWrapper>>();
        Map<String, Integer> moduleCountMap = new Map<String, Integer>();
        //List<String> moduleList = new List<String>();

        List<Contact> contactList = [
            SELECT Name, Email, Phone, Module__c
            FROM Contact
            WHERE Module__c != null
            ORDER BY Module__c
        ];

        for (Contact contObj : contactList) {
            List<ContactWrapper> conWrapperList = new List<ContactWrapper>();

            if (mapModule.containsKey(contObj.Module__c)) {
                conWrapperList = mapModule.get(contObj.Module__c);

                conWrapperList.add(new ContactWrapper(contObj));

                mapModule.put(contObj.Module__c, conWrapperList);

                moduleCountMap.put(contObj.Module__c, conWrapperList.size());
            } else {
                conWrapperList.add(new ContactWrapper(contObj));
                mapModule.put(contObj.Module__c, conWrapperList);

                moduleCountMap.put(contObj.Module__c, conWrapperList.size());
            }
        }
        return mapModule;
    }

    public class ContactWrapper {
        public ContactWrapper(Contact contObj) {
            this.Name = contObj.Name;
            this.Email = contObj.Email;
            this.Phone = contObj.Phone;
            this.Module = contObj.Module__c;
        }
        @AuraEnabled
        public String Name { get; set; }
        @AuraEnabled
        public String Email { get; set; }
        @AuraEnabled
        public String Phone { get; set; }
        @AuraEnabled
        public String Module { get; set; }
    }
}
 
