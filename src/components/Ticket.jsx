import styles from './Ticket.module.css'

function Ticket({ ticket }) {
    let message = 'Ta hand om varandra!';

    // if (ticket.name === 'Lasse-Stefanz') {
    //     message = 'Sektion C - plats 233, ta med paraply!';
    // } else if (ticket.name === 'Klubb Untz') {
    //     message = 'Ta med vattenflaska och balla brillor.';
    // }

    return (
        <section className={styles.ticket}>
            <section className={styles.gridSpan3}>
                <aside>WHAT</aside>
                <h2>Lasse-Stefanz</h2>
            </section>
            <section className={styles.gridSpan3}>
                <aside>WHERE</aside>
                <h3>Kjell Härnqvistsalen</h3>
            </section>
            <section className={styles.gridSpan3}>
                <section>
                    <aside>WHEN</aside>
                    <h4>21 mars</h4>
                </section>
                <section>
                    <aside>FROM</ aside>
                    <h4>19.00</h4>
                </section>
                <section>
                    <aside>TO</aside>
                    <h4>21.00</h4>
                </section>
            </section>
            <section>
                <aside>INFO</aside>
                <p>{message}</p>
            </section>
            <section>
                barcode
            </section>
        </section>
    );
}

export default Ticket;