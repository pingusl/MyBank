const Account = (props) => {
  //  console.log(props.account.name);
  return (
    <div>
      <div className="headerAccount">
        <h3>{props.account.name}</h3>
        <h3>{props.account.balance}</h3>
      </div>
      <div className="bookeepingRecords"></div>
    </div>
  );
};
export default Account;
