import styles from './layout.module.css'

export default function({ children }){
    return <div className={styles.container}>{ children }</div>
}