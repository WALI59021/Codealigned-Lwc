public with sharing class Accountdetailsclass {
    @AuraEnabled(cacheable=true)
    public static List<Account> accountdetailsByAccountId(Id accountId) {
        return [
            SELECT Id, Name, CloseDate, Amount,
                   StageName, Probability,
                   AccountId, OwnerId
            FROM Account WHERE AccountId in: accountId ];
    }
}
