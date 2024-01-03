import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import PromotionalBanner from '@/components/PromotionalBanner'
import CategoryCarousel from '@/components/CategoryCarousel'
import SectionCarousel from '@/components/SectionCarousel'

const inter = Inter({ subsets: ['latin'] })

import axios from 'axios';

export default function Home ({
  promotionsCategories,
  banner,
  dynamicCategories
}) {

  // const promotionsCategories = [
  //   {
  //     "id": 5488,
  //     "id_marca": 387,
  //     "promocion": "Prod",
  //     "fecha_limite": "2023-12-31 23:59:59",
  //     "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
  //     "pro": 0,
  //     "condiciones_url": "https://api-dev.cuponerapp.com/cond/5488",
  //     "marca": {
  //       "id": 387,
  //       "nombre_marca": "Cuponerapp",
  //       "color": "#eae7d0",
  //       "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
  //       "categoria": {
  //         "id": 8,
  //         "nombre": "Automotriz"
  //       }
  //     },
  //     "productos": [
  //       {
  //         "id": 120,
  //         "nombre": "FOLIOS DESHABILITADOS",
  //         "precio": "20.00",
  //         "id_cupon": 5488,
  //         "img": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg"
  //       }
  //     ]
  //   },
  //   {
  //     "id": 6287,
  //     "id_marca": 387,
  //     "promocion": "Prod 3",
  //     "fecha_limite": "2023-12-31 23:59:59",
  //     "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
  //     "pro": 0,
  //     "condiciones_url": "https://api-dev.cuponerapp.com/cond/6287",
  //     "marca": {
  //       "id": 387,
  //       "nombre_marca": "Cuponerapp",
  //       "color": "#eae7d0",
  //       "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
  //       "categoria": {
  //         "id": 8,
  //         "nombre": "Automotriz"
  //       }
  //     },
  //     "productos": [
  //       {
  //         "id": 1390,
  //         "nombre": "FOLIOS PROD 3",
  //         "precio": "30.00",
  //         "id_cupon": 6287,
  //         "img": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg"
  //       },
  //       {
  //         "id": 1391,
  //         "nombre": "FOLIOS PROD 4",
  //         "precio": "40.00",
  //         "id_cupon": 6287,
  //         "img": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg"
  //       }
  //     ]
  //   },
  //   {
  //     "id": 6286,
  //     "id_marca": 387,
  //     "promocion": "Prod 2",
  //     "fecha_limite": "2023-12-31 23:59:59",
  //     "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
  //     "pro": 0,
  //     "condiciones_url": "https://api-dev.cuponerapp.com/cond/6286",
  //     "marca": {
  //       "id": 387,
  //       "nombre_marca": "Cuponerapp",
  //       "color": "#eae7d0",
  //       "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
  //       "categoria": {
  //         "id": 8,
  //         "nombre": "Automotriz"
  //       }
  //     },
  //     "productos": [
  //       {
  //         "id": 1389,
  //         "nombre": "FOLIOS PROD 2",
  //         "precio": "20.00",
  //         "id_cupon": 6286,
  //         "img": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg"
  //       }
  //     ]
  //   },
  //   {
  //     "id": 6288,
  //     "id_marca": 387,
  //     "promocion": "Prod 4",
  //     "fecha_limite": "2023-12-31 23:59:59",
  //     "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
  //     "pro": 0,
  //     "condiciones_url": "https://api-dev.cuponerapp.com/cond/6288",
  //     "marca": {
  //       "id": 387,
  //       "nombre_marca": "Cuponerapp",
  //       "color": "#eae7d0",
  //       "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
  //       "categoria": {
  //         "id": 8,
  //         "nombre": "Automotriz"
  //       }
  //     },
  //     "productos": []
  //   },
  //   {
  //     "id": 43434343,
  //     "id_marca": 387,
  //     "promocion": "Prod 4",
  //     "fecha_limite": "2023-12-31 23:59:59",
  //     "img_cupon": "https://www.cuponerapp.com/images/Fotoscupon/tr_2020-07-21_11_30_08.435070.jpg",
  //     "pro": 0,
  //     "condiciones_url": "https://api-dev.cuponerapp.com/cond/6288",
  //     "marca": {
  //       "id": 387,
  //       "nombre_marca": "Cuponerapp",
  //       "color": "#eae7d0",
  //       "img": "https://cuponerapp.com/storage/brands/Cuponerapp.png",
  //       "categoria": {
  //         "id": 8,
  //         "nombre": "Comida"
  //       }
  //     },
  //     "productos": []
  //   }
  // ]

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

  const groupedCategories = groupByCategory(promotionsCategories);



  console.log('dynamicCategories', dynamicCategories)
  console.log('promotionsCategories', promotionsCategories)

  return (
    <main
      className={`${inter.className}`}
    >
      <div className='w-full max-w-[500px] h-screen'>
        <div className='flex flex-col gap-6'>
          <Header title='Home' />

          <div className='px-5'>
            <PromotionalBanner banner={banner} />
          </div>

          <div className='pl-5'>
            <CategoryCarousel categories={dynamicCategories} />
          </div>

          <div className='pl-5'>
            <SectionCarousel groupedCategories={groupedCategories} />
          </div>
        </div>
      </div>
    </main>
  )
}


export async function getServerSideProps (context) {

  const { query } = context;
  const state = query.state;

  const urls = [
    `https://api.cuponerapp.com/v2/estados/${state}/promociones`,
    `https://api.cuponerapp.com/v2/estados/${state}/banners`,
    `https://api.cuponerapp.com/v2/estados/${state}/dinamicas`
  ];

  const headers = {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJjMGE4NGE5NDc2ODM4ZmZiZjFiMmQxMzVhZmMwOGM2YWZkNzdlNDZhYjE0ODdiMDY2NzJmNWYyY2E3NTQ4MDA1NDJmNzljYTBlN2JkNzI3In0.eyJhdWQiOiIxIiwianRpIjoiYmMwYTg0YTk0NzY4MzhmZmJmMWIyZDEzNWFmYzA4YzZhZmQ3N2U0NmFiMTQ4N2IwNjY3MmY1ZjJjYTc1NDgwMDU0MmY3OWNhMGU3YmQ3MjciLCJpYXQiOjE3MDM4ODgwMTUsIm5iZiI6MTcwMzg4ODAxNSwiZXhwIjoxNzM1NTEwNDE0LCJzdWIiOiI2MjA5MTYiLCJzY29wZXMiOltdfQ.0400xfzee-3naSMZIcOeljmQR_7wQfWZct9EiBjUTbLrL_ENpqqEqqcqBNOmLNu-9YNOe0fbHxMCs-HLu7-aiGxCPSXE4qOIVL11fXIIVNFIpVv1qOV3MF-BKBo0IUd5S6g0nTt_pZ3bBc9-PUzEHTHFfi3uzO9DZQQn_uiTxyLocRnkSaVv-7HoKI61yh8mTB2eyao0NTUSeqhstbroINcl5CPJ78WPvfW46HMUC7jKC71iX6yh8H4tvmtAn-MrIE2MaSdt0HVRDh_-zdpU3JkvqFWq4nADaspLRsif4bopxhnQEEgRWJGFF6I3GHSa0UkSkwSWcCcJyqlVOqoHwzRT-SqyhWrnIHyvm0sEOwwOArOxV6aYI9IIoji2pDO-WDp0hZz_MOXn7QqhJFDlmnlWY7NdDp4B9GlPgyrsHeNZrr1SS2JQEXAm82eVEzrghP3n879JwsUoJTYEmjLVteens1m0_CzYR__qVDSGeStJAzm30J40Ahg3Zf8P0HxP5qmqc1JG7U0t68CWuPNZZNiuPnX2uhtVkRPg7WZFeRXVd87a-gde58mEwM3HaHAvuQJSmTEH3cp5yUYsMmgXzdybrGZWGgSVu4NziDR5U7Nsjlce53CNPAw9M2iyqf98ktNjIB1dcqtIYLfrqpMYx9CEVVoOrRwZb14DdDWz5ZE',
  };

  const requests = urls.map(url => axios.get(url, { headers }));

  try {
    const responses = await Promise.all(requests);

    const promotionsCategories = responses[0].data;
    const banner = responses[1].data;
    const dynamicCategories = responses[2].data;

    return {
      props: {
        promotionsCategories,
        banner,
        dynamicCategories
      },
    };
  } catch (error) {
    console.error('Error', error.message);

    return {
      props: {},
    };
  }
}
