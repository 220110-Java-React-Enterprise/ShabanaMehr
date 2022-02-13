// This models the joint_account table, which maps multiple owners (customers) of an account to the account (owners_id)
// customer's can be repeated (own multiple accounts) but jointAccount should be unique.
public class AccountOwnerModel {
    Integer accountId;          // This indicates which account the joint entry is mapped to
    Integer customerId;

    public Integer getAccountId() {
        return accountId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    // This needs to be an empty constructor because we won't know the account_id until after account is inserted?
    // or jdbc will work with this even without account added
    AccountOwnerModel () {
    }
}