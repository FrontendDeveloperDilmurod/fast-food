import React from "react";

function Contakat() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Bog'lanish
            </h1>

            <div className="grid grid-cols-1 md:grid-cols">
                {/* Aloqa Formasi */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Murojaat shakli</h2>
                    <form>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Ism
                            </label>
                            <input required
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Ismingizni kiriting"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Email
                            </label>
                            <input required
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Email manzilingizni kiriting"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Xabar
                            </label>
                            <textarea required
                                id="message"
                                rows="5"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Xabaringizni kiriting"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Yuborish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contakat;
