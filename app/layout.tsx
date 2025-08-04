import '@/app/globals.css'; 

export const metadata = {
  title: 'Nolan Portfolio',
  description: 'Portofolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gradient-to-r from-pink-100 to-blue-100 font-sans min-h-screen flex flex-col justify-between">
        <main className="flex-grow">
          {children}
        </main>
        <footer className="w-full text-center py-6 text-sm text-gray-600">
          <div className="border-t border-gray-300 pt-4">
            <p>© {new Date().getFullYear()} Nul. All rights reserved.</p>
            <p className="mt-1">
              Made using Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
