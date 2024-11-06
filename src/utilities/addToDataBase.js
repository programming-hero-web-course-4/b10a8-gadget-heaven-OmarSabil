/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


// Cart
const getStoredCart = () => {
    // cart list
    const storedCartStr = localStorage.getItem('cart-list')
    if (storedCartStr) {
        const storedListCart = JSON.parse(storedCartStr);
        return storedListCart;
    }
    else{
        return [];
    }
}
const addToStoredCart = (id) => {
    const storedListCart = getStoredCart();
    if (storedListCart.includes(id)) {
        console.log(id, 'Already exist in this list')
    }
    else {
        storedListCart.push(id);
        const storedCartStr = JSON.stringify(storedListCart);
        localStorage.setItem('cart-list', storedCartStr);
    }
}

// Wish
const getStoredWishList = () => {
    // wish list
    const storedWishStr = localStorage.getItem('wish-list')
    if (storedWishStr) {
        const storedListWish = JSON.parse(storedWishStr);
        return storedListWish;
    }
    else{
        return [];
    }
}
const addToStoredWish = (id) => {
    const storedListWish = getStoredWishList();
    if (storedListWish.includes(id)) {
        console.log(id, 'Already exist in this list')
    }
    else {
        storedListWish.push(id);
        const storedWishStr = JSON.stringify(storedListWish);
        localStorage.setItem('wish-list', storedWishStr);
    }
}


export{addToStoredCart, addToStoredWish, getStoredCart, getStoredWishList}

