import arrayAccountsObject from "../assets/accounts.json";
import Account from "./Account";
console.log(arrayAccountsObject[0]);

const Accounts = (props) => {
  return (
    <div className="app-accounts">
      <Account account={arrayAccountsObject[0]} />
    </div>
  );
};
export default Accounts;
