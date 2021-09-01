export default class StackExExample extends LightningElement {

    tobeOppProduct =
      [
        {
          "Id": '1',
          "ProductName": "Prod 1",
          "UnitPrice": 5,
          "VariantValue" : 100
        },
        {
          "Id": '2',
          "ProductName": "Prod 2",
          "UnitPrice": 6,
          "VariantValue" : 102
        }
  ]
  
   onfieldchange (event) {
      let dataid = event.target.name;
      let newvalue = event.target.value;
  
      let currentvalue = this.tobeOppProduct.find(etd => etd.Id == dataid);
      console.log(currentvalue);
  
    }
  
    get VariantValueOptions() {
      return [
        {label: '--None--', value: ''},
        {label: 'Option 1', value: 'Option 1'},
        {label: 'Option 2', value: 'Option 2'}
      ];
    } 
   
  }
  