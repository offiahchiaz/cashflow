import TransactionForm from './TransactionForm'
import styles from './Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Transaction list</p>
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  )
}
