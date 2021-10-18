// recordViewGetRecord.js
import { LightningElement, api, wire } from 'lwc';

export default class AccountViewer extends LightningElement {
    myValue = "My Account Name";
   overrideValue(event) {
       this.myValue = "My New Name";
   }
}