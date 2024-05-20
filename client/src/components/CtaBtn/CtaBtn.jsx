import styles from "./CtaBtn.module.css";

function CtaBtn({ type = "white", onClick, children }) {
  return (
    <button className={`${styles.cta} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default CtaBtn;
