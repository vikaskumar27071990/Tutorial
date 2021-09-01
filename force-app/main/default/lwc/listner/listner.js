import { LightningElement,track,wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubsub';

export default class Listner extends LightningElement {
    @track message;
    @wire(CurrentPageReference) pageRef;
    
    //when the page is load i want to suscribe to the event i.e 'messagesend' event
    //we want 'messagesend' event fire from publisher
    connectedCallback() {
        //suscribe to messagesend event
        //And whenever it suscribe it has to call the methord--->this.handlemessagesend
        registerListener('messagesend', this.handlemessagesend, this);
    }

//when event fire from publisher it calls this.handlemessagesend()
//Basically its assignign message to our track property
    handlemessagesend(publisherMessage) {
        this.message = publisherMessage;
    }
    //Then i disconnect call back by unregistered all listners
    disconnectedCallback() {
        unregisterAllListeners(this);
    }  
}