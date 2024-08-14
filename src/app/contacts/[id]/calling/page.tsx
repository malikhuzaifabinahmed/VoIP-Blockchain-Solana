import {
  PhoneIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

export default function Page() {
  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Calling...</h1>
      <div className="border p-4 rounded-lg mb-4">
        <p>Call in progress...</p>
      </div>
      <div className="flex space-x-4">
        <button
          type="button"
          title="End call"
          className="bg-red-500 text-white p-2 rounded-full"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <button
          title="Mute"
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          <MicrophoneIcon className="h-6 w-6" />
        </button>
        <button
          title="Video"
          className="bg-green-500 text-white p-2 rounded-full"
        >
          <VideoCameraIcon className="h-6 w-6" />
        </button>
        <button
          title="Answer"
          className="bg-gray-500 text-white p-2 rounded-full"
        >
          <PhoneIcon className="h-6 w-6" />
        </button>
      </div>
    </main>
  );
}
