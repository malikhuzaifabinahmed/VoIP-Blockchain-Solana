import React from "react";
import ContactItem from "./ContactItem";
import { Plus } from "lucide-react";

interface ContactsSectionProps {
  title: string;
  contacts: { name: string; bankDetails: string; avatarUrl: string }[];
}

const ContactsSection: React.FC<ContactsSectionProps> = ({
  title,
  contacts,
}) => {
  return (
    <div className="mt-4 w-full">
      <h2 className="mb-2 font-semibold text-lg">{title}</h2>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          name={contact.name}
          bankDetails={contact.bankDetails}
          avatarUrl={contact.avatarUrl}
        />
      ))}
    </div>
  );
};

export default ContactsSection;
