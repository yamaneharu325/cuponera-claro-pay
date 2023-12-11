import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import PromotionalBanner from '@/components/PromotionalBanner'
import CategoryCarousel from '@/components/CategoryCarousel'
import SectionCarousel from '@/components/SectionCarousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {

  const categories = [
    {
      "id": 5488,
      "id_marca": 387,
      "promocion": "Prod",
      "fecha_limite": "2023-12-31 23:59:59",
      "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
      "pro": 0,
      "condiciones_url": "https://api-dev.cuponerapp.com/cond/5488",
      "marca": {
        "id": 387,
        "nombre_marca": "Cuponerapp",
        "color": "#eae7d0",
        "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
        "categoria": {
          "id": 8,
          "nombre": "Automotriz"
        }
      },
      "productos": [
        {
          "id": 120,
          "nombre": "FOLIOS DESHABILITADOS",
          "precio": "20.00",
          "id_cupon": 5488,
          "img": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg"
        }
      ]
    },
    {
      "id": 6287,
      "id_marca": 387,
      "promocion": "Prod 3",
      "fecha_limite": "2023-12-31 23:59:59",
      "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
      "pro": 0,
      "condiciones_url": "https://api-dev.cuponerapp.com/cond/6287",
      "marca": {
        "id": 387,
        "nombre_marca": "Cuponerapp",
        "color": "#eae7d0",
        "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
        "categoria": {
          "id": 8,
          "nombre": "Automotriz"
        }
      },
      "productos": [
        {
          "id": 1390,
          "nombre": "FOLIOS PROD 3",
          "precio": "30.00",
          "id_cupon": 6287,
          "img": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg"
        },
        {
          "id": 1391,
          "nombre": "FOLIOS PROD 4",
          "precio": "40.00",
          "id_cupon": 6287,
          "img": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg"
        }
      ]
    },
    {
      "id": 6286,
      "id_marca": 387,
      "promocion": "Prod 2",
      "fecha_limite": "2023-12-31 23:59:59",
      "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
      "pro": 0,
      "condiciones_url": "https://api-dev.cuponerapp.com/cond/6286",
      "marca": {
        "id": 387,
        "nombre_marca": "Cuponerapp",
        "color": "#eae7d0",
        "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
        "categoria": {
          "id": 8,
          "nombre": "Automotriz"
        }
      },
      "productos": [
        {
          "id": 1389,
          "nombre": "FOLIOS PROD 2",
          "precio": "20.00",
          "id_cupon": 6286,
          "img": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg"
        }
      ]
    },
    {
      "id": 6288,
      "id_marca": 387,
      "promocion": "Prod 4",
      "fecha_limite": "2023-12-31 23:59:59",
      "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
      "pro": 0,
      "condiciones_url": "https://api-dev.cuponerapp.com/cond/6288",
      "marca": {
        "id": 387,
        "nombre_marca": "Cuponerapp",
        "color": "#eae7d0",
        "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
        "categoria": {
          "id": 8,
          "nombre": "Automotriz"
        }
      },
      "productos": []
    },
    {
      "id": 43434343,
      "id_marca": 387,
      "promocion": "Prod 4",
      "fecha_limite": "2023-12-31 23:59:59",
      "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
      "pro": 0,
      "condiciones_url": "https://api-dev.cuponerapp.com/cond/6288",
      "marca": {
        "id": 387,
        "nombre_marca": "Cuponerapp",
        "color": "#eae7d0",
        "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
        "categoria": {
          "id": 8,
          "nombre": "Comida"
        }
      },
      "productos": []
    }
  ]

  const groupByCategory = (categorias) => {
    return categorias.reduce((resultado, categoria) => {
      const nombreCategoria = categoria.marca.categoria.nombre;

      const categoriaExistente = resultado.find((item) => item.nombre === nombreCategoria);

      if (!categoriaExistente) {
        resultado.push({
          nombre: nombreCategoria,
          objetos: [categoria],
        });
      } else {
        categoriaExistente.objetos.push(categoria);
      }

      return resultado;
    }, []);
  }

  const groupedCategories = groupByCategory(categories);
  return (
    <main
      className={`${inter.className}`}
    >
      <div className='w-full max-w-[500px] h-screen'>
        <div className='flex flex-col gap-6'>
          <Header title='Home' />

          <div className='px-5'>
            <PromotionalBanner />
          </div>

          <div className='pl-5'>
            <CategoryCarousel categories={categories} />
          </div>

          <div className='pl-5'>
            <SectionCarousel groupedCategories={groupedCategories} />
          </div>
        </div>
      </div>
    </main>
  )
}
