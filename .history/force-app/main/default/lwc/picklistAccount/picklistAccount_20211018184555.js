// recordViewGetRecord.js
import { LightningElement, track, wire} from 'lwc';


export default class picklistAccount extends LightningElement {
   
   
   
   /* @track picklistValues;
    @track error;
    @track values;

    @wire(getPicklistValues, { 
        recordTypeId: '0015j000002z8yNAAQ', 
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
 
