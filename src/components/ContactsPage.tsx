import React from "react";
import SearchBar from "./SearchBar";
import ContactsSection from "./ContactsSection";
import { Plus } from "lucide-react";

const ContactsPage: React.FC = () => {
  const [query, setQuery] = React.useState("");
  const allContacts = [
    {
      name: "Samantha",
      bankDetails: "Bank - 0987 3422 8756",
      avatarUrl: "https://via.placeholder.com/48",
    },
    {
      name: "Rose Hope",
      bankDetails: "Bank - 0987 3422 8756",
      avatarUrl: "https://via.placeholder.com/48",
    },
    {
      name: "Angela Smith",
      bankDetails: "Bank - 0987 3422 8756",
      avatarUrl: "https://via.placeholder.com/48",
    },
    {
      name: "Andrea Summer",
      bankDetails: "Bank - 0987 3422 8756",
      avatarUrl: "https://via.placeholder.com/48",
    },
    {
      name: "Karen William",
      bankDetails: "Bank - 0987 3422 8756",
      avatarUrl: "https://via.placeholder.com/48",
    },
    {
      name: "Thomas Wise",
      bankDetails: "Bank - 0987 3422 8756",
      avatarUrl: "https://via.placeholder.com/48",
    },
  ];
  const onSearch = (query: string) => {};

  let filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(query)
  );
  return (
    <div className="relative min-h-screen">
      <div className="shadow-md p-4 w-full md:max-w-[400px] h-full">
        <div className="flex items-center mb-4">
          <h1 className="ml-2 font-bold text-2xl">Contacts</h1>
        </div>
        <ContactsSection title="All Contacts" contacts={filteredContacts} />
      </div>
      <button
        title="Add contact"
        type="button"
        className="bottom-24 left-4 absolute btn btn-circle btn-primary"
      >
        <Plus />
      </button>
      <SearchBar
        onSearch={setQuery}
        className="right-4 bottom-5 left-4 absolute flex justify-between w-[90%]"
      />
    </div>
  );
};

export default ContactsPage;
