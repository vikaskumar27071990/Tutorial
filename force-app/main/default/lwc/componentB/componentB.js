import { LightningElement,track,wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubsub';

export default class Listner extends LightningElement {
    @track componentBmessage;
    @wire(CurrentPageReference) pageRef;
    
   /*CONNECT PUBLISHMESSAGE DISCONNECT*/ 
    connectedCallback() {
        registerListener('messagesend', this.handlemessagesend, this);
    }


    handlemessagesend(publisherMessage) {
        this.componentBmessage = publisherMessage;
    }
    
    disconnectedCallback() {
        unregisterAllListeners(this);
    }  
}