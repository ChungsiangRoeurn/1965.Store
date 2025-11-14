import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Sneaker", price: 50, category: "newest" },
    { id: 2, name: "Jacket", price: 80, category: "trending" },
  ];

  return NextResponse.json(products);
}
