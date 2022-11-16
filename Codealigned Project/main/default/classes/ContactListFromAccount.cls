public with sharing class ContactListFromAccount {
    @AuraEnabled(cacheable=true)
    public static list<Contact> findContactByAccountId(Id accountId) {

        return [SELECT id,FirstName,LastName,Email,Phone 
                 FROM Contact WHERE AccountId in: accountId ];

    }
}
