import styles from './people.module.scss'

const People = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                alt="bridge"
                src="/bridge.webp"
            />
            <div className={styles.people}>
                <div className={styles.person} />
                <div className={styles.person} />
            </div>
        </div>
    )
}

export default People