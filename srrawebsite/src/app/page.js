import Image from 'next/image';
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
    <title>Salisbury Road Residents Association</title>
    <meta name="description" content="The official website for Salisbury Road Residents Association in Moseley." />
    <meta property="og:title" content="Salisbury Road Residents Association" />
    <meta property="og:description" content="Find information about the Salisbury Road Residents Association, Sign up as a member, and submit your objection to the West Moseley road closures." />
    <meta property="og:image" content="/ClosuresFlyer.png" />
    <meta property="og:url" content="https://www.salisburyroadmoseley.co.uk/" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
    <title>Salisbury Road Residents Association</title>  
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
    </>
  );
}
