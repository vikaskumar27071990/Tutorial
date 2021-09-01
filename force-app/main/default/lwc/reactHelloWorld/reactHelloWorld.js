import { LightningElement, track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import REACT from '@salesforce/resourceUrl/react';
import REACTDOM from '@salesforce/resourceUrl/reactDom';

export default class ReactHelloWorld extends LightningElement {

    async connectedCallback() {
        //await loadScript(this, REACT);
        //await loadScript(this, REACTDOM);
        //ReactDOM.render(
            React.createElement('div', null, `Hello React`);
            this.template.querySelector('div');
       // );
     }

     disconnectedCallback(){
        ReactDOM.unmountComponentAtNode(this);
     }
}