import Link from "next/link";
import { PhoneIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

type ContactCardProps = {
  contact: { id: number; name: string; phone: string };
};

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm flex justify-between items-center bg-white hover:bg-gray-100 transition">
      <div>
        <h2 className="text-lg font-semibold">{contact.name}</h2>
        <p className="text-gray-500">{contact.phone}</p>
      </div>
      <div className="flex space-x-2">
        <Link href={`/contacts/${contact.id}`}>
          <InformationCircleIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
        </Link>
        <Link href={`/contacts/${contact.id}/call`}>
          <PhoneIcon className="h-6 w-6 text-green-500 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
