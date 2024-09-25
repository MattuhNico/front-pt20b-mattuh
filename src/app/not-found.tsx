import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import ReturnButton from "@/components/ReturnButton/ReturnButton";
import WheelchairImage from "@/components/WheelchairImage/WheelchairImage";

const notFound = () => {
   return (
    <div className="text-center py-20">
      <ErrorMessage
        title="404 - Página no encontrada"
        description="Lo sentimos, no pudimos encontrar la página que buscas."
      />
      <WheelchairImage />
      <ReturnButton />
    </div>
  );
}

export default notFound