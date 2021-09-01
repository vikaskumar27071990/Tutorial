import { LightningElement,api } from 'lwc';

export default class LdsCreateRecord extends LightningElement {
  
    @api objectApiName;
    
    
    handleSubmit(){    alert(' Record Submit');  }
    handleSuccess(){    alert('Record Create!!!!');  }
    handleError(){    alert('ERROR=====>Record !!!!');  }
}