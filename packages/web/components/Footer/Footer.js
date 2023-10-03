import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.css'; // Update this import
import accentLogo from "../../assets/Frame 1000002536.svg";

const Footer = () => {
  return (
    <div className={styles["w-full"]}>
      <div className={`${styles["h-auto"]} ${styles["min-h-[100px]"]} ${styles["bg-blue-100"]} ${styles.flex} ${styles["items-center"]} ${styles["justify-center"]} ${styles.py-5} ${styles.px-5}`}>
        <footer className={styles.footer}>
          <div className={styles["cc-container"]}>
            <Image src={accentLogo} alt="" width={100} height={100} />
            <div className={styles["footer-list"]}>
              <ul>
                <li>Menu</li>
                <Link href="#"><li>Home</li></Link>
                <Link href="#"><li>Converter</li></Link>
                <Link href="#"><li>How it Works</li></Link>
              </ul>
              <ul>
                <li>About Us</li>
                <Link href="#"><li>About</li></Link>
                <Link href="#"><li>Contact Us</li></Link>
                <Link href="#"><li>Privacy Policy</li></Link>
              </ul>
              <ul>
                <li>Screen Record</li>
                <Link href="#"><li>Browser Window</li></Link>
                <Link href="#"><li>Desktop</li></Link>
                <Link href="#"><li>Application</li></Link>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
