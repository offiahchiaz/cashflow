import TransactionForm from './TransactionForm'
import { useAuthContext } from '../../hooks/useAuthContext'
import styles from './Home.module.css'


export default function Home() {
  
  const { user } = useAuthContext()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Transaction list</p>
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
