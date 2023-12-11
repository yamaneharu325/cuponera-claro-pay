import { Fragment } from "react"
import Image from "next/image"

import { AiOutlineShopping } from "react-icons/ai"

const ProductCard = ({ product, selectProduct }) => {



  return (
    <Fragment>
      <div
        onClick={() => selectProduct(product)}
        className="bg-[#F4F4F4] rounded-lg aspect-w-10 aspect-h-11 cursor-pointer">
        <div className="h-[113px] rounded-t-lg bg-blue-100 w-full relative overflow-hidden">
          <Image
            src={product?.img}
            layout="fill"
            object-fit="cover"
            alt="banner promocional"
          />
        </div>
        <div className="relative p-2">
          <p className="text-sm font-normal">{product?.nombre}</p>
          <p className="text-base font-semibold">${product?.precio}</p>

          <div className="absolute bottom-2 right-2 h-6 w-6 bg-[#DCA927] text-white flex justify-center items-center rounded-lg">
            <AiOutlineShopping />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductCard
