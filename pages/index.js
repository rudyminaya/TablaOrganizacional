import Head from 'next/head';
import { HeaderNav } from '../components/headerNav';
import { Tabla } from '../components/tabla';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <HeaderNav />
            <Tabla />
        </>
    );
}
