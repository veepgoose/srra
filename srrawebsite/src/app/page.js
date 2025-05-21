export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Welcome to Salisbury Road Residents Association</h2>

      <div className="p-4 bg-mint bg-opacity-45 border-l-4 border-sage rounded">
        <p className="text-leaf text-bold text-lg">
          🚧 This site is currently under construction. We're actively working on adding more resources and updates — thank you for your patience!
        </p>
      </div>

      <p className="text-lg">
        This is the official online space for our community. Here you can explore the Residents Association’s constitution, meeting minutes, announcements, and more.
      </p>

      <div>
        <a
          href="https://forms.gle/v4RNGLDDaucGiT9t9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-sage text-ivory text-xl rounded-lg font-semibold hover:bg-mint transition"
        >
          Join the Salisbury Road Residents Association
        </a>
      </div>
    </div>
  );
}