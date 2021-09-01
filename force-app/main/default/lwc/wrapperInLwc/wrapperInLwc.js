import { LightningElement, wire } from 'lwc';
import getWrapperClassList from '@salesforce/apex/wrapperController.getWrapperClassList';

export default class WrapperInLwc extends LightningElement {
    @wire(getWrapperClassList) wrapperList;
}