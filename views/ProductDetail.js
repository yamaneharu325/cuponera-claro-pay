import Button from "@/components/Button";
import Image from "next/image"

import { GoArrowLeft } from "react-icons/go"

const iconStyle = {
  width: '24px',
  height: '24px',

};

const ProductDetail = ({
  product,
  setSelectedProduct,
  setShowProductDetail
}) => {
  console.log('product', product)

  const handleReturn = () => {
    setSelectedProduct({})
    setShowProductDetail(false)
  }

  const handleButton = () => {

  }

  return (
    <div>
      <div className="px-5 cursor-pointer" style={{ width: '32px' }} onClick={handleReturn}>
        <GoArrowLeft style={iconStyle} />
      </div>
      <div className="relative w-full overflow-hidden bg-blue-300" style={{ height: '224px', marginTop: '24px' }}>
        <Image
          src={product?.img}
          layout="fill"
          object-fit="cover"
          alt="banner promocional"
        />
      </div>
      <div className="w-full px-5 pt-10">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-base font-bold">{product?.nombre}</p>
            {/* <p>(Marca)</p> */}
          </div>
          <div>
            <p className="text-[#DCA927] font-bold text-2xl">${product?.precio}</p>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-[#DCA927] font-semibold text-base">Detalles</p>
          <div className="mt-2">
            {
              console.log('product', product)
            }
            <p className="text-[#9095A6] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra maximus nibh, ut consectetur neque maximus ac. Nullam sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra maximus nibh, ut consectetur neque maximus ac. </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 bottom-8">
          <Button
            text={'Comprar'}
            onClick={handleButton}
            type={'button'}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
