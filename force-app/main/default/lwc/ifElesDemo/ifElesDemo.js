import { LightningElement } from 'lwc';

export default class IfElesDemo extends LightningElement {
     isTom=false;
     isJerry=true;
    
     showTom(){

        this.isjerry = false;
        this.isTom = true;
    }

    showJerry(){
        this.isjerry = true;
        this.isTom = false;

    }


}