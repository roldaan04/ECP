import styles from './SkipLink.module.css';

/** Enlace «Saltar al contenido», visible al recibir foco. */
export default function SkipLink() {
  return (
    <a href="#contenido" className={styles.skip}>
      Saltar al contenido
    </a>
  );
}
