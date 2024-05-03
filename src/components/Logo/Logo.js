import logo from "../../assests/logo.png";
import styles from "./Logo.module.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.logoDiv}><img  src={logo} alt="logo" width={67}/></div>
);
};

export default Logo;