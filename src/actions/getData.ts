"use server";

export function getUserContacts() {
  const contacts = [
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
  return { data: contacts };
}
