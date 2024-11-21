import React from 'react';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-lg text-gray-700 mt-4">
                Kechirasiz, siz qidirayotgan sahifa mavjud emas.
            </p>
            <a
                href="/"
                className="mt-6 text-blue-600 hover:underline"
            >
                Go back to Home
            </a>
        </div>
    );
}

export default NotFound;
