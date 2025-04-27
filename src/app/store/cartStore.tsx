import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CartItem = {
    id: string;
    variantId?: string;
    title: string;
    img: string;
    price: number;
    priceSale: number;
    volume: { options: string[]; selected: number };
    quantity: number;
};

type CartStore = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string, selectedIndex: number, variantId?: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    updateVolume: (id: string, index: number, selectedIndex: number) => void;
    clearCart: () => void;
};

const useCartStore = create<CartStore>()(
    devtools(
        persist(
            (set) => ({
                cart: [],
                addToCart: (item) =>
                    set((state) => {
                        const existingItem = state.cart.find(
                            (cartItem) =>
                                cartItem.id === item.id &&
                                cartItem.volume.selected === item.volume.selected
                        );

                        if (existingItem) {
                            return {
                                cart: state.cart.map((cartItem) =>
                                    cartItem.id === item.id &&
                                        cartItem.volume.selected === item.volume.selected
                                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                        : cartItem
                                ),
                            };
                        }

                        return { cart: [...state.cart, { ...item, quantity: 1 }] };
                    }),
                removeFromCart: (id, selectedVolumeIndex, variantId) =>
                    set((state) => ({
                        cart: state.cart.filter(
                            (item) =>
                                !(
                                    item.id === id &&
                                    item?.variantId === variantId &&
                                    item.volume.selected === selectedVolumeIndex
                                )
                        ),
                    })),
                updateQuantity: (id, quantity) =>
                    set((state) => ({
                        cart: state.cart.map((item) =>
                            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
                        ),
                    })),
                updateVolume: (id: string, index: number, selectedIndex: number) =>
                    set((state) => {
                        const cart = [...state.cart];

                        const itemToUpdate = cart[index];
                        const newVolumeValue = itemToUpdate.volume.options[selectedIndex];

                        const updatedItem: CartItem = {
                            ...itemToUpdate,
                            volume: {
                                ...itemToUpdate.volume,
                                selected: selectedIndex,
                            },
                        };

                        const duplicateIndex = cart.findIndex(
                            (item, idx) =>
                                idx !== index &&
                                item.id === itemToUpdate.id &&
                                item.volume.options[item.volume.selected] === newVolumeValue
                        );

                        if (duplicateIndex !== -1) {
                            const updatedCart = cart
                                .map((item, idx) => {
                                    if (idx === duplicateIndex) {
                                        return {
                                            ...item,
                                            quantity: item.quantity + itemToUpdate.quantity,
                                        };
                                    }
                                    return item;
                                })
                                .filter((_, idx) => idx !== index);
                            return { cart: updatedCart };
                        } else {
                            cart[index] = updatedItem;
                            return { cart };
                        }
                    }),
                clearCart: () => set({ cart: [] }),
            }),
            { name: 'userCart-store' }
        )
    )
);

export { useCartStore };