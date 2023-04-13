import styles from './Ticket.module.css'

function Ticket({ ticket }) {
    let message = 'Ta hand om varandra!';

    // if (ticket.name === 'Lasse-Stefanz') {
    //     message = 'Sektion C - plats 233, ta med paraply!';
    // } else if (ticket.name === 'Klubb Untz') {
    //     message = 'Ta med vattenflaska och balla brillor.';
    // }

    return (
        <section className={styles.ticketContainer}>

            <article className={styles.ticket}>
                <section>
                    <aside className={styles.info}>WHAT</aside>
                    <h2 className={styles.name}>Lasse-Stefanz</h2>
                </section>
                <section>
                    <aside className={styles.info}>WHERE</aside>
                    <h3 className={styles.where}>Kjell Härnqvistsalen</h3>
                </section>
                <section className={styles.grid3col}>
                    <section>
                        <aside className={styles.info}>WHEN</aside>
                        <h4 className={styles.when}>21 mars</h4>
                    </section>
                    <section>
                        <aside className={styles.info}>FROM</ aside>
                        <h4 className={styles.when}>19.00</h4>
                    </section>
                    <section>
                        <aside className={styles.info}>TO</aside>
                        <h4 className={styles.when}>21.00</h4>
                    </section>
                </section>
                <section className={styles.message}>
                    <aside className={styles.info}>INFO</aside>
                    <p className={styles.p}>{message}</p>
                </section>
                <section className={styles.img}>
                    <img src="./src/assets/barcode.svg" alt="" />
                </section>
            </article>
        </section>
    );
}

export default Ticket;