import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList';



export const Items = () => {


    
    const [products, setProducts] = useState([]);

    useEffect(() => {
      new Promise((resolve, reject) => {
        ///
        const data = [
          {
            id: "1",
            title: "Minecraft",
            description: "Minecraft Java Edition Digital para PC",
            stock: 10,
            price: 10000,
            url: 'https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg'
            
          },
          {
            id: "2",
            title: "Fortnite Neo Versa + 2000 Pavos",
            description: "Incluye Skin Neo Versa + 2000 pavos",
            stock: 5,
            price: 20000,
            url: 'https://cdn.cdkeys.com/700x700/media/catalog/product/f/o/fortnite-neo-versa-500-v-bucks-bundle-ps4-us.png'
            
          }
          
        ];
        setTimeout(() => resolve(data), 2000);

      })
        .then((dataResolve) => {
          console.log("data Resolve", dataResolve);
          setProducts(dataResolve);
        })
        .catch((error) => {
          console.log("err", error);
        });

    }, []);

  
    return (
      <div className="row row-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn items ">
        
        {
           products.map((Producto) => (
            <ItemList 
            key={Producto.id} 
            {...Producto}
            />
           ) )

        }


      </div>
    );
  }