import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      <title>Salisbury Rd Residents Association</title>
      {/* Header */}
      <header className="w-full text-center py-6">
        <h1 className="text-3xl font-bold">SALISBURY ROAD RESIDENTS ASSOCIATION</h1>
      </header>

      {/* Leaflet Image */}
      <div className="w-full max-w-2xl my-6">
        <Image 
          src="/ClosuresFlyer.png" 
          alt="Salisbury Road Residents Association Leaflet" 
          width={800} 
          height={600} 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Links */}
      <div className="flex flex-col gap-4">
        <a
          href="https://www.birminghambeheard.org.uk/bcc/westmoseleytrs/consultation/subpage.2018-02-26.3413088493/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-center bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          SUBMIT YOUR OBJECTION
        </a>
        
        <a
          href="https://www.surveymonkey.com/r/BPS96BC"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-center bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Join Salisbury Road Residents Association
        </a>
      </div>
    </div>
  );
}
