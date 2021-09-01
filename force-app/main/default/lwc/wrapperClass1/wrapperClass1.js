import { LightningElement, wire } from 'lwc';
import getWrapperList from '@salesforce/apex/WrapperClass1.getWrapperList';

export default class WrapperClass1 extends LightningElement {
    @wire(getWrapperList) wrappers;
}