import "./globals.css";

export const metadata = {
  title: "Salisbury Road Residents Association",
  description: "Resources and updates for residents of Salisbury Road, Moseley.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ivory text-leaf font-sans">
        <header className="bg-sage shadow sticky top-0 z-10">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-ivory">Salisbury Road RA</h1>
            <ul className="flex flex-wrap gap-4 text-sm text-ivory font-medium">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/constitution" className="hover:underline">Constitution</a></li>
              <li><a href="/code-of-conduct" className="hover:underline">Code of Conduct</a></li>
              <li><a href="/agenda" className="hover:underline">Agenda</a></li>
              <li><a href="/minutes" className="hover:underline">Minutes</a></li>
              <li><a href="/announcements" className="hover:underline">Announcements</a></li>
              <li><a href="/history" className="hover:underline">History</a></li>
              <li><a href="/join" className="hover:bg-mint text-ivory border border-mint px-2 py-1 rounded">Join</a></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

