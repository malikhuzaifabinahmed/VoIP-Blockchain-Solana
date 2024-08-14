import Link from "next/link";

export default function CallPage() {
  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Dialing...</h1>
      <div className="border p-4 rounded-lg mb-4">
        <p>Connecting to the contact...</p>
      </div>
      <Link
        href={`/contacts/${1}/calling`}
        className="text-white bg-blue-500 px-4 py-2 rounded"
      >
        Call
      </Link>
    </main>
  );
}
