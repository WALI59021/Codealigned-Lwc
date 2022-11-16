import { LightningElement,wire,api } from 'lwc';
import accountdetailsByAccountId from '@salesforce/apex/Accountdetailsclass.accountdetailsByAccountId';

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


export default class Accountdetailscomponent extends LightningElement {


    columns = columns;
    @api accountId;
    @wire(accountdetailsByAccountId,{accountId:'$accountId'}) Account;


}
