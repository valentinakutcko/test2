// recordViewGetRecord.js
import { LightningElement, track, wire} from 'lwc';
import {getPicklistValues} from 'lightning/uiObjectInfoApi';
import ACCOUNT_SOURCE from '@salesforce/schema/Account.AccountSource';



export default class picklistAccount extends LightningElement {
    @track value

    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA', 
        fieldApiName: ACCOUNT_SOURCE 
    })
    wiredPicklistValue({data, error}) {
        if(data){
            console.log('Picklist values are ${data}');
        }
        if(error){
            console.log('Error while fetching Picklist values ${error}');
           }
    }
}
 
