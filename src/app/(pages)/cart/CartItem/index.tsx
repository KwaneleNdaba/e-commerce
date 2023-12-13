"use client"
import React, { useState } from 'react'
import classes from "./index.module.scss"
import Link from 'next/link'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import Image from 'next/image'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'
function CartItem({
    qty,
    addItemToCart,
    product,
    title,
    metaImage}) {

        const [quantity, setQuantity] = useState(1)

        const decrement = () => {
            const updatedQty = quantity > 1  ? quantity - 1 : 1; 
            setQuantity(updatedQty)
            addItemToCart({product, quantity: Number(updatedQty)})
        }
        const increment = () => {
            const updatedQty = quantity + 1; 
            setQuantity(updatedQty)
            addItemToCart({product, quantity: Number(updatedQty)})
        }

        const enterQty = (e:React.ChangeEvent<HTMLInputElement>) => {
            const updatedQty = Number(e.target.value)
            addItemToCart({product, quantity: Number(updatedQty)})
        }


  return (
    <li className={classes.item}>
        <Link href={`prouducts/${product.slug}`} className = {classes.mediaWrapper}>
        {!metaImage && <span>no image</span>}
        {metaImage && typeof metaImage !== "string" && (
            <Media className = {classes.media} imgClassName = {classes.image}
            resource = {metaImage} fill />
        )}

        </Link>
            <div className={classes.itemDetails}>
            <div className={classes.titleWrapper}>
            <h6>{title}</h6>
                    <Price product={product} button={false}/>
                </div>
              
                <div className={classes.quantity}>
                    
                <div onClick={decrement} className={classes.quantityBtn}>
                <Image src = "/assets/icons/minus.svg" 
                width = {24}
                height = {24}
                className ={classes.qtnBt}
                alt = "minus-icon"
                />
            </div>
            <input type='text' className={classes.quantityInput} onChange={enterQty} value={quantity}/>
            <div onClick={increment} className={classes.quantityBtn}>
                <Image src = "/assets/icons/plus.svg" 
                width = {24}
                height = {24}
                className ={classes.qtnBt}
                alt = "plus-icon"
                />
            </div>
                </div>
            
            </div>
            <div className={classes.subtotalWrapper}>
                <Price product = {product} button = {false} quantity={quantity}/>
                <RemoveFromCartButton product={product}/>
            </div>
    </li>
  )
}

export default CartItem
