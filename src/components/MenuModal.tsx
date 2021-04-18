
import styles from '../styles/components/MenuModal.module.css';

import { useState } from 'react';
import Link from 'next/link';

import { MenuItems } from '../utils/menu-items';
import { FaBars, FaRegTimesCircle } from 'react-icons/fa';

export default function MenuModal() {

   let [openMenu, setOpenMenu] = useState(true);

   return (

      <div className={styles.menu}>
         { openMenu ? (
            <span onClick={() => setOpenMenu(false)} ><FaBars /></span>
         ) : (
               <div className={styles.overlay} >
                  <span onClick={() => setOpenMenu(true)}><FaRegTimesCircle /></span>
                  <nav>
                     <ul>
                        {MenuItems.map((menu, index) => {
                           return (
                              <li key={index}>
                                 <Link href={menu.path}>
                                    <a> {menu.icon} {menu.title} </a>
                                 </Link>
                              </li>
                           )
                        })}
                     </ul>
                  </nav>
               </div>
            )}
      </div>
   );
}