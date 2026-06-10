import { FiMessageCircle } from "react-icons/fi";
import { whatsappNumber } from "../content";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-950/30 transition hover:scale-105"
    >
      <FiMessageCircle size={24} />
    </a>
  );
}
