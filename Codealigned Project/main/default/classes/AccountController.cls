public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountTable() {
        return [
            SELECT Id, Name, CloseDate, Amount,
                   StageName, Probability,
                   AccountId, OwnerId
            FROM Account
        ];
    }
}
