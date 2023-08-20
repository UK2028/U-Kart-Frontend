import { useUser } from '../../context';

import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList"

export const CartPage = () => {

  const { cartList } = useUser();

  return (
    <main className=" bg-white dark:bg-gray-800 px-5">
      { cartList?.length ? <CartList/> : <CartEmpty/> }
    </main>
  )
}
