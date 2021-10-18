// recordViewGetRecord.js
import { LightningElement, track, wire} from 'lwc';
import {getPicklistValues} from 'lightning/uiObjectInfoApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';



export default class picklistAccount extends LightningElement {
    @track picklistValues;
    @track error;
    @track values;

    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA', 
        fieldApiName: ACCOUNT_NAME_FIELD 
    })
    wiredPicklistValue({data, error}) {
        if(data){
            console.log('Picklist values are', data.values);
            this.picklistValues = data.values;
            this.error = undefined;
        }
        if(error){
            console.log('Error while fetching Picklist values ${error}');
            this.error = error;
            this.picklistValues = undefined;
           }
        }
           handleChange () {
        }
    }
 
