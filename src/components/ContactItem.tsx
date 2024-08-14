import { DeleteIcon, PhoneCall, Trash2Icon, TrashIcon } from "lucide-react";
import React from "react";

interface ContactItemProps {
  name: string;
  bankDetails: string;
  avatarUrl: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  name,
  bankDetails,
  avatarUrl,
}) => {
  return (
    <div className="flex justify-between items-center space-x-4 py-2 w-full">
      <div className="flex items-center space-x-4">
        <img src={avatarUrl} alt={name} className="rounded-full w-12 h-12" />
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-gray-500 text-sm">{bankDetails}</div>
        </div>
      </div>
      <div className="btn btn-ghost">
        <TrashIcon className="w-6 h-6 text-red-500 cursor-pointer" />
      </div>
      <div className="btn btn-ghost">
        <PhoneCall className="w-6 h-6 text-green-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ContactItem;
