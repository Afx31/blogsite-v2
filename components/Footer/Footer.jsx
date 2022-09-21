import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <p>&copy; Will Mitchell Codes</p>
      </div>
    </footer>
  )
}

export default Footer;