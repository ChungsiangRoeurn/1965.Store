import Header from "@/components/layout/header/header";
import { CartProvider } from "@/context/CartContext";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F9FAFB] text-[#272343]">
        <CartProvider>
          <Header />
          <main className="py-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
