import "../App.css"
import notebook from "../images/g.png"
const Header = () => {
  return (
    <div className=" navbar navbar-expand-sm bg-warning" >
      <div className="container  " id="notepic">
      <img className="noteimg" src={notebook} alt="googlekeep" />
        <h2>Zaid-Keep</h2>
      </div>
    </div>
  );
};

export default Header;
