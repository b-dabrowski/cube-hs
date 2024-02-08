import styles from '../styles/home.module.css';
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <section className={styles.logoSection}>
                        <div>
                            <Image
                                src={'/logo.jpeg'}
                                alt={'Picture of logo'}
                                width={500}
                                height={500}
                            />
                        </div>
                    </section>
                </div>
                <video
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                    }}
                    autoPlay
                    muted
                    loop
                >
                    {/* Provide multiple sources for cross-browser compatibility */}
                    <source src="/background.mp4" type="video/mp4"/>
                    {/* Add additional source elements for other video formats if needed */}
                    Your browser does not support the video tag.
                </video>
            </header>

            <section className={styles.ownerSection}>
                <div>
                    <Image
                        src={'/czeyzer.png'}
                        alt={'Picture of barber named czeyzer'}
                        width={500}
                        height={500}
                    />
                    <p>
                        <a className={styles.contactInfo} href={'https://www.instagram.com/czeyzer/'}>
                            <strong>@czeyzer</strong>
                        </a>
                    </p>
                    <p>
                        <a className={styles.contactInfo} href="tel:+48 516 545 691">+48 516 545 691</a>
                    </p>
                </div>
                <div>
                    <Image
                        src={'/donpavko.png'}
                        alt={'Picture of barber named donpavko'}
                        width={500}
                        height={500}
                    />
                    <p>
                        <a className={styles.contactInfo} href={'https://www.instagram.com/donpavko/'}>
                            <strong>@donpavko</strong>
                        </a>
                    </p>
                    <p>
                        <a className={styles.contactInfo} href="tel:+48 791 481 999">+48 791 481 999</a>
                    </p>
                </div>
            </section>

            <section className={styles.descriptionSection}>
                <h1 className={styles.descriptionHeader}>Barber Augustów</h1>
                <p className={styles.descriptionTitle}>Quality over quantity.</p>
                <p className={styles.descriptionText}>Aby umówić wizytę napisz do nas lub zadzwoń.</p>
            </section>

            <section className={styles.contactSection}>
                <p className={styles.contactTitle}>Znajdziesz nas tutaj</p>
                <p className={styles.contactText}>Wojska polskiego 2A, Augustów 16-300</p>
                {/* Add your contact form here */}
                <iframe
                    width="100%"
                    height="500"
                    style={{border: 0}}
                    src="https://maps.google.com/maps?q=White+Cube+hairsalon&amp;ie=UTF8&amp;&amp;output=embed"
                ></iframe>
            </section>
        </div>
    );
}
