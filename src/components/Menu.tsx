import styles from '../styles/components/Menu.module.css';

export default function Menu() {
    return(
        <nav className={styles.navWrapper}>
           <a href="#" className={styles.wrapperIcon}>
                <i className={styles.menuIcon}></i>
            </a> 
            <span className={styles.myName}><span>PABLO</span> <span>HENRIQUE</span></span>
        </nav>
    )
}