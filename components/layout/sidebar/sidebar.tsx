"use client";

import { BarChart3, Package, Plus, Settings, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath: string;
}) {
  const navigation = [
    { name: "Overview", href: "/dashboard", icon: BarChart3 },
    { name: "Products", href: "/dashboard/products", icon: Package },
    { name: "Add Product", href: "/dashboard/products/new", icon: Plus },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 bg-[#272343] text-white w-64 min-h-screen flex flex-col justify-between p-6 shadow-lg z-20">
      <div>
        <div className="flex items-center space-x-2 mb-10">
          <div className="bg-[#FFD803] w-8 h-8 rounded-md flex items-center justify-center">
            <span className="text-[#272343] font-extrabold text-lg">S</span>
          </div>
          <span className="text-xl font-bold tracking-wide">
            1965<span className="text-[#FFD803]">.Store</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <div className="text-xs uppercase font-semibold text-[#E3F6F5] mb-2 tracking-wider">
            Dashboard Menu
          </div>

          {navigation.map((item, key) => {
            const Icon = item.icon;
            const isActive = currentPath === item.href;
            return (
              <Link
                key={key}
                href={item.href}
                className={`flex items-center space-x-3 py-2 px-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#FFD803] text-[#272343] font-semibold"
                    : "text-gray-200 hover:bg-[#303254] hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#303254] pt-4 mt-10 text-xs text-gray-400">
        <p>© 2025 1965.Store</p>
        <p className="text-gray-500">All rights reserved.</p>
      </div>
    </div>
  );
}
