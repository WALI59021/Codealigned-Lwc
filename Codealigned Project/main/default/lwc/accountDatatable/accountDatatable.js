import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccountTable';

const actions = [
    { label: 'view', name: 'view' },
    
];

const columns =[
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Rating ', fieldName: 'Rating', type:'Picklist' },
    { label: 'Industry', fieldName: 'Industry', type:'Picklist' },
    { label: 'Close Date', fieldName: 'Phone' , type:'Phone'},
    { label: 'Amount', fieldName: 'AnnualRevenue', type: 'currency',cellAttributes: { alignment: 'left' } },
    { label: 'Owner ID', fieldName: 'OwnerId' },
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    }
]



export default class AccountDatatable extends LightningElement {

    tableData = [];
    columns = columns ;
    accountIdFromParent;

    @wire(getAccounts) Accounts ;
    
    handleRowAction(event){
        event.preventDefault();     
        this.accountidfrmparent = event.target.dataset.accountid;       
    }



}





