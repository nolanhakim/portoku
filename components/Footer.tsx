export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-sm text-gray-400">
      <div className="border-t border-gray-700 pt-4">
        <p>
          © {new Date().getFullYear()} Nul. All rights reserved.
        </p>
        <p className="mt-1">
          Made with <span className="text-red-500">❤</span> using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
