import Image from "next/image";
import BuyImage from "@/public/assets/pana.png";

const BuyPage = () => {
  return (
    <div className="bg-[#DCA927]">

      <div className="bg-[#DCA927]">
        <div className="pt-36 pb-16 flex justify-center">
          <Image
            src={BuyImage}
            alt="Buy confirm Image"
          />
        </div>
      </div>
      <div className="bg-white rounded-t-3xl">
        <p className="py-10 text-3xl text-center">Orden procesada con<br /> éxito</p>
        <p className="text-gray-400 text-center">Lorem Ipsum sit amet, consectetur</p>
        <div className="flex justify-center pt-12 px-6">
          <button className="bg-[#DCA927] w-full rounded-xl h-16"><p className="text-white text-xl font-semibold">Inicio</p></button>
        </div>
      </div>
    </div>
  )
}
export default BuyPage;