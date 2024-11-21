import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS faylini import qilish
import { food_list } from './../assets/assets';

function Menu() {
  // AOS ni ishga tushirish
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animatsiyalar 1 marta ishlaydi va davomiyligi 1 soniya
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      {/* Sarlavha */}
      <h1 
        className="text-3xl font-bold text-center mb-8" 
        data-aos="fade-down" // Sarlavha pastga tushish animatsiyasi
      >
        Menu
      </h1>
      {/* Kartalar tarmog'i */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        data-aos="fade-up" // Kartalar gridi yuqoriga chiqish animatsiyasi
      >
        {food_list.map((item, index) => (
          <div
            key={index}
            className="relative border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            data-aos="zoom-in" // Har bir karta zoom animatsiyasi
          >
            {/* Rasm */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Kontent */}
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-gray-600 mt-2">{item.price} $</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
