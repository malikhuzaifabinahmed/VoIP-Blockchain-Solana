const contacts = [
  { id: 1, name: "John Doe", phone: "123-456-7890", email: "john@example.com" },
  {
    id: 2,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
  },
  // Add more contacts here
];

export default function ContactDetailsPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const { id } = searchParams;
  const contact = contacts.find((contact) => contact.id === Number(id));

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <main className="p-4">
      <h1 className="mb-4 font-bold text-2xl">Contact Details</h1>
      <div className="p-4 border rounded-lg">
        <h2 className="font-semibold text-lg">{contact.name}</h2>
        <p className="text-gray-500">Phone: {contact.phone}</p>
        <p className="text-gray-500">Email: {contact.email}</p>
      </div>
    </main>
  );
}
