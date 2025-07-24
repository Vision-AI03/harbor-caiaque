import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de saber mais sobre os passeios de caiaque da Harbor!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-float transition-all duration-300 hover:scale-110 animate-float z-50"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;