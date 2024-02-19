import React, {useContext} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

export const Shop = () => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className='shop-category'>
            <h1>Shop</h1>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
