import Logo from "./Logo";
import User from "./User";
const Header = (props) => {
  return (
    <div className="app-header">
      <>
        <Logo />
      </>
      <>
        <User userName={props.username} />
      </>
    </div>
  );
};
export default Header;
