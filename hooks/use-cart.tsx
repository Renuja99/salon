import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

// import { AlertTriangle } from 'lucide-react';

interface CartStore {
  items: any[];
  addItem: (data: any) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set: any, get: any) => ({
      items: [],
      addItem: (data: any) => {
        const currentItems = get().items;

        console.log(data, 'unparsed javascript')

        //parsing currently added cart item
        const tempData = JSON.parse(data);

        let tempCurrentItems: any = [];


        //parse existing items in store
        currentItems.map((item: any) => {
          tempCurrentItems.push(item);
        });

        //checking if currently added item to store already exists
        const existingItem = tempCurrentItems.find(
          (item: any) => item.id === tempData.id
        );

        if (existingItem) {
          return toast('Item already in cart.');
        }

        set({ items: [...get().items, tempData] });
        toast.success('Item added to cart.');
      },
      removeItem: (id: string) => {
        console.log(id, 'removed items')
        const currentItems = get().items;

        let tempCurrentItems: any = [];

        //returns an array of stringified objects
        console.log(currentItems, 'current Items')

        //parse existing items in store
        currentItems.map((item: any) => {
          tempCurrentItems.push(item);
        });
        const existingItem = tempCurrentItems.filter(
          (item: any) => item.id !== id
        );


        set({
          items: existingItem
        })
        // set({ items: [...get().items.filter((item: any) => item.id !== id)] });
        toast.success('Item removed from cart.');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;