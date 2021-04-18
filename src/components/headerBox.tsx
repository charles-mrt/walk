import styles from '../styles/components/HeaderBox.module.css';

import MenuModal from '../components/MenuModal';

export function HeaderBox() {

   return (
      <header>
         <div className={styles.content}>
            <img src="/assets/logo.svg" alt="walk" className={styles.logo} />
            <button type="button"> <MenuModal /> </button>
         </div>
      </header>
   )
}