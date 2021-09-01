import { LightningElement, track, wire } from 'lwc';
import caregiverMatch from '@salesforce/apex/imageDetails.imageMap';


export default class Caroselmage extends LightningElement {
  // @track imageUrlList=[['https://tandemcareplanning-dev-ed.my.salesforce.com/servlet/servlet.FileDownload?file=0155w000003gIRf','https://tandemcareplanning-dev-ed.my.salesforce.com/servlet/servlet.FileDownload?file=0155w000003gIRf','https://tandemcareplanning-dev-ed.my.salesforce.com/servlet/servlet.FileDownload?file=0155w000003gIRf'],['https://tandemcareplanning-dev-ed.my.salesforce.com/servlet/servlet.FileDownload?file=0155w000003gIRf','https://tandemcareplanning-dev-ed.my.salesforce.com/servlet/servlet.FileDownload?file=0155w000003gIRf']];
    @track imageUrlList=[[]];
    @track currentDisplayImage=[];
    @track isPreviousButtonDisabled=false;
    @track isNextButtonDisabled=false;
    @track playStatus=false;
    @track playButton=true;
    @track setVal=0;
    @track caroselClass="slds-col slds-size_1-of-3 slds-clearfix";
    @track displayData=[];
    @wire(caregiverMatch, {}) lookupDetailsList({data,error}) {
        var newList=[];
        if(data) {
            for(let key of data){
                this.displayData.push({url:key.conImageUrl});
            }
        }else{
            // eslint-disable-next-line no-console
            console.log('here ',error);
        }
        for(let i=0;i<this.displayData.length; i++){
            newList=[];
           
            let j=i;
            let nextset=i+3;
            
            while(j<nextset){   
                if(j>=this.displayData.length){
                    break;
                }
                
                // eslint-disable-next-line no-console
                console.log('this.displayData[j].ids ',this.displayData[j].ids);
                newList.push({url:this.displayData[j].url, });
                i=j;
                j++;
            }
            this.imageUrlList.push(newList);
        }
        let bool=true;
        this.imageUrlList[this.setVal].forEach(function(element){
            bool=false;
            this.currentDisplayImage.push(...[element]);
        },this);
        if(bool){
            this.imageUrlList.splice(0, 1);
        }
        this.isPreviousButtonDisabled=true;
        if(this.imageUrlList.length-1 === this.setVal){
            this.isNextButtonDisabled=true;
        }
    }
    previousImage(){    
        this.setVal=this.setVal-1;
        this.caroselClass="slds-col slds-size_1-of-3 slds-clearfix";
        if(this.setVal>=0){
            this.isPreviousButtonDisabled=false;
            this.currentDisplayImage=[];
            this.imageUrlList[this.setVal].forEach(function(element){
                this.currentDisplayImage.push(...[element]);
            },this);
        }
        if(this.setVal===0){
            this.setVal=0;
            this.isPreviousButtonDisabled=true;
        }
        if(this.imageUrlList.length-1 !== this.setVal){
            this.isNextButtonDisabled=false;
        }
    }
    NextImage(){
        this.caroselClass="slds-col slds-size_1-of-3 slds-clearfix";
        // eslint-disable-next-line no-console
        console.log('length '+this.imageUrlList.length );
        this.setVal=this.setVal+1;
        if(this.imageUrlList.length-1 >= this.setVal ){
            this.isNextButtonDisabled=false;
            this.currentDisplayImage=[];
            this.imageUrlList[this.setVal].forEach(function(element){
                this.currentDisplayImage.push(...[element]);
            },this);
        }
        if(this.imageUrlList.length-1 === this.setVal){
            this.setVal=this.imageUrlList.length-1;
            this.isNextButtonDisabled=true;
        }
        if(this.setVal!==0){
            this.isPreviousButtonDisabled=false;
        }
    }
    handleOnclick(event){
        // eslint-disable-next-line no-console
        console.log('Button Na/ record Id ',event.target.name);
    }
    
}
