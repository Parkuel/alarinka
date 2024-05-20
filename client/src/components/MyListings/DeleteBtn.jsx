import Icons from "../Icons/Icons";
import styles from "./DeleteBtn.module.css";

function DeleteBtn({ onClick, classes }) {
  return (
    <button onClick={onClick} className={`${classes}`}>
      <Icons type="bin" />
    </button>
  );
}

export default DeleteBtn;
