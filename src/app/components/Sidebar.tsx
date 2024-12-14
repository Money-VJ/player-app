// src/app/components/Sidebar.tsx
"use client"; // Директива для клиента

import React from "react";
import Link from "next/link"; // Правильный импорт Link из Next.js

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 w-64 p-6">
      <h2 className="text-white text-2xl font-bold mb-8">Категории</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/category/hiphop" className="text-white hover:text-gray-400">Хип-хоп</Link>
          </li>
          <li>
            <Link href="/category/pop" className="text-white hover:text-gray-400">Поп</Link>
          </li>
          <li>
            <Link href="/category/rock" className="text-white hover:text-gray-400">Рок</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
