import { useState } from 'react';

import Button from "@/components/Button";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const iconStyle = {
  width: '24px',
  height: '24px',

};

const ProductDetail = ({
  product,
  setSelectedProduct,
  setShowProductDetail
}) => {
  const [localCart, setLocalCart] = useState(() => {
    const storedCart = localStorage.getItem('localCart');
    return storedCart ? JSON.parse(storedCart) : [];
  })

  const handleReturn = () => {
    setSelectedProduct({})
    setShowProductDetail(false)
  }

  const handleButton = () => {

  }

  const handleAddCart = () => {
    const updatedCart = [...localCart, product];
    setLocalCart(updatedCart);
    localStorage.setItem('localCart', JSON.stringify(updatedCart));

    toast.success('Producto añadido al carrito correctamente', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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

        <div className="absolute flex flex-col gap-5 left-5 right-5 bottom-8">
          <Button
            text={'Comprar'}
            onClick={handleButton}
            type={'button'}
          />

          <Button
            text={'Agregar al Carrito'}
            onClick={handleAddCart}
            type={'button'}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProductDetail
