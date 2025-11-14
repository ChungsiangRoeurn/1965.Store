export default function NotFound() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-[#272343] overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white opacity-10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 animate-fade-in">
        <h1 className="text-8xl font-extrabold mb-3 animate-float">404</h1>

        <p className="text-xl opacity-90 max-w-md">
          Oops! The page you're looking for cannot be found.
        </p>

        <a
          href="/"
          className="mt-6 px-7 py-3 bg-white text-[#272343] rounded-xl font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
