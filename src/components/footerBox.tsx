import styles from '../styles/components/FooterBox.module.css';
import Link from 'next/link';

import { SocialIcons } from '../utils/social-icons';

import {FaShoppingBag} from 'react-icons/fa';

export function FooterBox() {

   return (

      <footer className={styles.section}>
         <div className={styles.content}>

            <button><FaShoppingBag /></button>

            <ul>
               {SocialIcons.map((item, index) => {
                  return (
                     <li key={index} className={item.cName}>
                        <Link href={item.path}>
                           <a title={item.title}> {item.icon} </a>
                        </Link>
                     </li>
                  )
               })}
            </ul>

         </div>
      </footer>
   )
}