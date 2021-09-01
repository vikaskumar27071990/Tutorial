public with sharing class ApexAngularDemo {
	public String data{get;set;}
	public ApexAngularDemo() {
		 list<dataset> data1 = new List<dataset>();
		for(Account acc:[Select Name, Id from Account])
		{
			dataset ob = new dataset();
			ob.recordId = acc.Id;
			ob.recordName = acc.Name;
			data1.add(ob);

		}
		data = JSON.serialize(data1);
	}

	public class dataset
	{
		public String recordId{get;set;}
		public String recordName{get;set;}
	}
}