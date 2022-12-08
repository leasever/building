import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../data/items";

export default function Contact() {
  const params = useParams();
  const contact = useMemo(() => getContact(params.contactid), [params.contactid]);
  if (!contact) {
    throw new Error("El usuario no existe");
  }
  return (
    <div className="contactContainer">
      <h1>{contact.name}</h1>
      <p>{contact.telephone}</p>
      <p>{contact.favorite ? "favorite" : "regular"}</p>
    </div>
  );
}
