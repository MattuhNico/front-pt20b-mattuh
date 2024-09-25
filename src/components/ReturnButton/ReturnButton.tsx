import Link from "next/link";

const ReturnButton: React.FC = () => {
  return (
    <Link href="/" passHref>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        Volver al inicio
      </button>
    </Link>
  );
};

export default ReturnButton;
