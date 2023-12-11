import Image from "next/image"


const CategoryCarousel = ({ categories }) => {

  return (
    <div>
      <p className="pb-4 font-regular text-base">Categorías</p>

      <div className="w-full max-w-[100%] overflow-hidden pb-1">
        <div className="flex gap-5 w-full overflow-x-auto">
          {
            categories.map((category) => (
              <div key={category.id} className="flex flex-col gap-1 text-center w-fit">
                <div className="rounded-full bg-blue-300 w-14 h-14 max-h-14 max-w-[56px] overflow-hidden relative">
                  <Image
                    src="https://picsum.photos/200/300"
                    layout="fill"
                    object-fit="cover"
                    alt="banner promocional"
                  />
                </div>
                <p>{category.nombre}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryCarousel
