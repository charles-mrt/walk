import { 
   FaShoppingBag, 
   FaUserCircle, 
   FaTags,
   FaShoePrints,
   FaGifts
} 
from 'react-icons/fa';
 
export const MenuItems = [
   {
      title: "best offer",
      icon: <FaTags/>,
      path:"/",      
   },

   {
      title: "shoes",
      icon: <FaShoePrints />,
      path:"/",
   },

   {
      title: "all product",
      icon: <FaGifts />,
      path:"/",
   },

   {
      title: "cart",
      icon: <FaShoppingBag />,
      path:"/",
   },

   {
      title: "my account",
      icon: <FaUserCircle />,
      path:"/",
   },
]