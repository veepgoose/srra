import Image from 'next/image';

export default function Home() {
  return (

      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
        {/* Header */}
        <title>Salisbury Road Residents Association</title>
        <header className="w-full text-center py-6">
          <h1 className="text-3xl font-bold">SALISBURY ROAD RESIDENTS ASSOCIATION</h1>
        </header>

        {/* Leaflet Image */}
        <div className="w-full max-w-2xl my-6">
          <Image 
            src="/ResidentsAssociationAgenda.png" 
            alt="Salisbury Road Residents Association Agenda" 
            width={800} 
            height={600} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Links */}
      
          
          <a
            href="https://forms.gle/v4RNGLDDaucGiT9t9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-center bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            Join Salisbury Road Residents Association
          </a>
        </div>
      
  );
}
