import { LightningElement } from 'lwc';

import ContactListsFromAccount from '@salesforce/apex/ContactListFromAccount.findContactByAccountId';
const columns =  [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName'},
    { label: 'Email', fieldName: 'Email', type: 'email' },    
];


export default class Contactrecordslist extends LightningElement {

    columns = columns;
    @api accountId;
    @wire(findContactByAccountId,{accountId:'$accountId'}) contacts;


}