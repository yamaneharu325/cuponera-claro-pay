import Image from "next/image"

const PromotionalBanner = ({ img }) => {
  return (
    <div className="w-full h-[170px] max-h-[170px] rounded-xl bg-gray-300 max-w-[100%] overflow-hidden relative">
      <Image
        src="https://picsum.photos/200/300"
        layout="fill"
        object-fit="cover"
        alt="banner promocional"
      />
    </div>
  )
}

export default PromotionalBanner
