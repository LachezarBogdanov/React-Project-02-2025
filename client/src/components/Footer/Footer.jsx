import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer>
        <h1>WHEYPRO</h1>
        <div className={styles.footerWrapper}>
            <section className={styles.address}>
                <h2>
                    <i className="fa-solid fa-location-dot" />
                    Address
                </h2>
                <p>Sofia, bul.Tsarigradsko 160</p>
            </section>

            <section className={styles.mobile}>
                <h2>
                    <i className="fa-solid fa-phone" />
                    Phone-number
                </h2>
                <p>0888888888</p>
            </section>

            <section className={styles.email}>
                <h2>
                    <i className="fa-solid fa-envelope" />
                    E-mail
                </h2>
                <p>wheypro-support@gmail.com</p>
            </section>
        </div>

        <div className={styles.icons}>
            <div className={styles.iconsWrapper}>
                <a href="#">
                    <i className="fa-brands fa-facebook" />
                </a>
                <a href="#">
                    <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                    <i className="fa-brands fa-twitter" />
                </a>
            </div>
            <p>© All rights reserved 23.02.2025</p>
        </div>
</footer>

        
    )
}