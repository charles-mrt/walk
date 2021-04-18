import styles from '../styles/components/ProductBox.module.css';

import products from '../../products.json';
import { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

export function ProductBox() {

   const sliderProduct = products;
   const [current, setCurrent] = useState(0);
   const length = sliderProduct.length;
  
   const sliderSound = () => { new Audio('/assets/slider.mp3').play() };

   const NextSlider = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
      sliderSound()
   }
   const PrevSlider = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
      sliderSound()
   }


   if (!Array.isArray(sliderProduct) || sliderProduct.length <= 0) {
      return null;
   }

   return (
      <section className={styles.product}>

         <header className={styles.productDesctiption} >         
            {sliderProduct.map((product, index) => {
               return (
                  <div className={index === current ? 'titleActive' : 'title'} key={index}>
                     {index === current && (
                        <div>
                           <p><strong>{product.title_description1}</strong>
                              {product.description1}
                           </p>
                        </div>
                     )}

                     {index === current && (
                        <div><span />
                           <p><strong>{product.title_description2}</strong>
                              {product.description2}
                           </p>
                        </div>
                     )}
                  </div>
               )
            })}
         </header>

         <main>
            <span className={styles.arrows}>
               <FaAngleDoubleLeft onClick={PrevSlider} />
               <FaAngleDoubleRight onClick={NextSlider} />
            </span>
            {sliderProduct.map((product, index) => {
               return (
                  <div className={styles.slider} key={index}>
                     <div className={index === current ? 'slideActive' : 'slide'}>
                        {index === current && (
                           <>
                              <span className={'backgroundLight' + `${product.id}`} />
                              <img src={product.image} alt={product.alt} />
                              <h2>{product.title}</h2>
                           </>
                        )}
                     </div>
                  </div>
               )
            })}
         </main>

         <footer>
            <div className={styles.slickDots}>
               <ul>
                  {sliderProduct.map((product, index) => {
                     return (
                        <li key={index}>
                           <span
                              className={'backgroundLight' + `${product.id}`}
                              style={{
                                 padding: `${index === current ? '0.8rem' : '0.6rem'}`,
                                 boxShadow: `${index === current ? '0px 0px 6px 2px var(--white)' : ''}`,
                              }}
                           />
                        </li>
                     )
                  })}
               </ul>
            </div>
         </footer>

      </section>
   )
}