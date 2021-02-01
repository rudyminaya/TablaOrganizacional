import React from 'react';
import styles from './headerNav.module.css';

export const HeaderNav = () => {
    return (
        <nav className={styles.contenedor}>
            <ul className={styles.leftSide}>
                <li className={styles.itemLeft}>
                    <img src="/assets/logoBlanco.png" />
                </li>
                <li className={styles.itemLeft}>Dashboard</li>
                <li className={styles.itemLeft}>Organización</li>
                <li className={styles.itemLeft}>Modelos</li>
                <li className={styles.itemLeft}>Seguimiento</li>
            </ul>
            <ul className={styles.rightSide}>
                <li className={styles.itemRight}>
                    <img src="/assets/maletin.png" />
                </li>
                <li className={(styles.itemRight, styles.icono)}>
                    <img src="/assets/faq.png" />
                </li>
                <li className={styles.itemRight}>
                    <img src="/assets/notification.png" />
                </li>
                <li className={styles.itemRight}>
                    <img src="/assets/adminProfile.png" />
                </li>
                <li className={styles.itemRight}>Administrador</li>
                <li className={(styles.itemRight, styles.logoNegro)}>
                    <img src="/assets/logoNegro.png" />
                </li>
            </ul>
        </nav>
    );
};
