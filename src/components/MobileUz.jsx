import React from "react";

function MobileUz() {
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        MobileUz
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Mahalliy xizmatlar */}
        <div className="p-4 border rounded-lg shadow-md hover:bg-gray-200 transition">
          <h2 className="text-xl font-semibold">Mahalliy xizmatlar</h2>
          <p className="text-gray-600 mt-2">Usta va servis xizmatlari.</p>
        </div>

        {/* Oziq-ovqat buyurtma qilish */}
        <div className="p-4 border rounded-lg shadow-md hover:bg-gray-200 transition">
          <h2 className="text-xl font-semibold">Oziq-ovqat</h2>
          <p className="text-gray-600 mt-2">Restorandan yetkazib berish.</p>
        </div>

        {/* Sayohat */}
        <div className="p-4 border rounded-lg shadow-md hover:bg-gray-200 transition">
          <h2 className="text-xl font-semibold">Sayohat</h2>
          <p className="text-gray-600 mt-2">
            Yo'nalishlar va transport xizmatlari.
          </p>
        </div>

        {/* Til o'rganish */}
        <div className="p-4 border rounded-lg shadow-md hover:bg-gray-200 transition">
          <h2 className="text-xl font-semibold">Til o'rganish</h2>
          <p className="text-gray-600 mt-2">
            O‘zbek va boshqa tillarni o‘rganish.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileUz;
