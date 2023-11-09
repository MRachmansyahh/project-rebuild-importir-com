'use client'

import { createContext, useContext, useState } from "react";

const WishlistContext = createContext()

export const WishlistProvider  = ({children}) => {
    const [wishlist, setWishlist] = useState([])

    const addToWishlist = (product) => {
        setWishlist([...wishlist, product])
    }

    const removeFromWishlist = (productId) => {
        const updateWishlist = wishlist.filter((item) => item.id !== productId)
        setWishlist(updateWishlist)
    }

    return (
        <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
        {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => {
    return useContext(WishlistContext)
}