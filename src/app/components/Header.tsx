// src/app/components/Header.tsx
"use client"; // Директива для клиента

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Музыкальное приложение</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">Войти</button>
        <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">Регистрация</button>
      </div>
    </header>
  );
};

export default Header;
