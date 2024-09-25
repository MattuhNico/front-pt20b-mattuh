import Image from "next/image";

const WheelchairImage: React.FC = () => {
  return (
    <div className="flex justify-center mb-8">
      <Image
        src="https://thumbs.dreamstime.com/z/sill%C3%B3n-de-ruedas-viejo-abandonado-26556954.jpg?ct=jpeg"
        alt="Silla de ruedas"
        width={200}
        height={200}
        className="rounded-lg"
      />
    </div>
  );
};

export default WheelchairImage;
