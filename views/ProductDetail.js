import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as sdkclaro from "@claro/sdkclaro";

const iconStyle = {
  width: "24px",
  height: "24px",
};

// And then you cna use them in the page, it should load them, got it. but problems are below
const ProductDetail = ({
  product,
  setSelectedProduct,
  setShowProductDetail,
}) => {
  const [localCart, setLocalCart] = useState(() => {
    const storedCart = localStorage.getItem("localCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const router = useRouter();
  const handleReturn = () => {
    setSelectedProduct({});
    setShowProductDetail(false);
  };

  const serverFetching = async () => {
    const url = `https://api-dev.cuponerapp.com/compra`;
  
    const headers = {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJjMGE4NGE5NDc2ODM4ZmZiZjFiMmQxMzVhZmMwOGM2YWZkNzdlNDZhYjE0ODdiMDY2NzJmNWYyY2E3NTQ4MDA1NDJmNzljYTBlN2JkNzI3In0.eyJhdWQiOiIxIiwianRpIjoiYmMwYTg0YTk0NzY4MzhmZmJmMWIyZDEzNWFmYzA4YzZhZmQ3N2U0NmFiMTQ4N2IwNjY3MmY1ZjJjYTc1NDgwMDU0MmY3OWNhMGU3YmQ3MjciLCJpYXQiOjE3MDM4ODgwMTUsIm5iZiI6MTcwMzg4ODAxNSwiZXhwIjoxNzM1NTEwNDE0LCJzdWIiOiI2MjA5MTYiLCJzY29wZXMiOltdfQ.0400xfzee-3naSMZIcOeljmQR_7wQfWZct9EiBjUTbLrL_ENpqqEqqcqBNOmLNu-9YNOe0fbHxMCs-HLu7-aiGxCPSXE4qOIVL11fXIIVNFIpVv1qOV3MF-BKBo0IUd5S6g0nTt_pZ3bBc9-PUzEHTHFfi3uzO9DZQQn_uiTxyLocRnkSaVv-7HoKI61yh8mTB2eyao0NTUSeqhstbroINcl5CPJ78WPvfW46HMUC7jKC71iX6yh8H4tvmtAn-MrIE2MaSdt0HVRDh_-zdpU3JkvqFWq4nADaspLRsif4bopxhnQEEgRWJGFF6I3GHSa0UkSkwSWcCcJyqlVOqoHwzRT-SqyhWrnIHyvm0sEOwwOArOxV6aYI9IIoji2pDO-WDp0hZz_MOXn7QqhJFDlmnlWY7NdDp4B9GlPgyrsHeNZrr1SS2JQEXAm82eVEzrghP3n879JwsUoJTYEmjLVteens1m0_CzYR__qVDSGeStJAzm30J40Ahg3Zf8P0HxP5qmqc1JG7U0t68CWuPNZZNiuPnX2uhtVkRPg7WZFeRXVd87a-gde58mEwM3HaHAvuQJSmTEH3cp5yUYsMmgXzdybrGZWGgSVu4NziDR5U7Nsjlce53CNPAw9M2iyqf98ktNjIB1dcqtIYLfrqpMYx9CEVVoOrRwZb14DdDWz5ZE",
    };
  
    const stateId = localStorage.getItem('stateId');
    const data = {
      'product_id': product.id,
      'quantity': 1,
      'state_id': stateId
    }
    const requests = axios.post(url, data, { headers });
    
    try {
      // Here is how they processed the responses, you could also log
      const responses = Promise.all(requests);
      console.log('finalResponses: ', responses);

    } catch (error) {
      console.error("Error", error.message);
    }
  }

  const handleButton = async (product) => {
    const productState = {
      cardNumber: "1",
      idCom: "0074",
      idGrp: "0002",
      checkDigit: "1",
      amount: product.precio,
      appId: "Recarga",
    };
    console.log("here:", product);
    router.replace("/buy");
    const getInstance = async () => {
      await sdkclaro.getInstance(
        "Cuponera",
        () => {
          console.log("onLaunch");
        },
        () => {
          console.log("onShow");
        },
        () => {
          console.log("onHide");
        },
        () => {
          console.log("onError");
        },
        (eventName, eventInformation) => {
          console.log("eventInformation: ", eventInformation, eventName);
          if (eventName === "ONBACK") {
            window.history.back();
          }
          if (eventName === "otp_response") {
            dispatch(saveSession(true));
          }
          if (eventName === "responseRecharge") {
            console.log(eventInformation, "Log responseRecharge");
            store.dispatch({
              type: "DATA_RESPONSE_RECHARGE",
              payload: eventInformation,
            });
            router.replace("/buy");
          }
        },
        {}
      );
    };

    let tmp = await sdkclaro.getInstance("Cuponera");
    let tmp2 = Object.keys(tmp.bridge.functionResponse);
    setTimeout(() => {
      tmp2 = Object.keys(tmp.bridge.functionResponse);
      console.log("temp: ", tmp2);
      productState.appId = tmp2[0].slice(0, 36);
      console.log("productState: ", productState);
    }, 500);

    await sdkclaro.getInstance("Cuponera").setState(
      productState,
      (result) => {
        console.log("stateResult: ", result);
      },
      (error) => {
        console.log("error: ", error);
      }
    );

    await sdkclaro.getInstance("Cuponera").transactionPayment(
      {
        amount: product.precio,
        category: "MA",
        claroUserId: "36d4eff7-5334-4f2d-b8a8-ef88b6d90777",
        concept: "9e045213",
        description: "IMDM24594221",
        feeAmount: 0,
        logo: product.img,
        merchantId: "000000008b880061018bb134f81d0007",
        operationId: productState.appId,
        payProcessor: { id: 1, name: "N2", showCVVV: false },
        refNumber: "",
        reference: "IMDM24594221",
        totalCommission: 0,
      },
      (result) => {
        console.log(result);
        sdkclaro
          .getInstance(
            "Cuponera",
            (eventName, eventInformation) => {
              console.log("eventInformation: ", eventInformation, eventName);
              if (eventName === "ONBACK") {
                window.history.back();
              }
              if (eventName === "otp_response") {
                dispatch(saveSession(true));
              }
              if (eventName === "responseRecharge") {
                console.log(eventInformation, "Log responseRecharge");
                store.dispatch({
                  type: "DATA_RESPONSE_RECHARGE",
                  payload: eventInformation,
                });
                serverFetching();
                router.replace("/buy");
              }
            },
            {}
          )
          .switchGoBackButton(false);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleAddCart = () => {
    const updatedCart = [...localCart, product];
    setLocalCart(updatedCart);
    localStorage.setItem("localCart", JSON.stringify(updatedCart));

    toast.success("Producto añadido al carrito correctamente", {
      position: "top-right",
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
      <div
        className="px-5 cursor-pointer"
        style={{ width: "32px" }}
        onClick={handleReturn}
      >
        <GoArrowLeft style={iconStyle} />
      </div>
      <div
        className="relative w-full overflow-hidden bg-blue-300"
        style={{ height: "224px", marginTop: "24px" }}
      >
        <Image
          src={product?.img}
          layout="fill"
          object-fit="fill"
          alt="banner promocional"
        />
      </div>
      <div className="w-full px-5 pt-10">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-base font-bold">
              {decodeURIComponent(escape(product?.nombre))}
            </p>
            {/* <p>(Marca)</p> */}
          </div>
          <div>
            <p className="text-[#DCA927] font-bold text-2xl">
              ${product?.precio}
            </p>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-[#DCA927] font-semibold text-base">Detalles</p>
          <div className="mt-2">
            <p className="text-[#9095A6] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra maximus nibh, ut consectetur neque maximus ac. Nullam sit
              amet Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas viverra maximus nibh, ut consectetur neque maximus ac.{" "}
            </p>
          </div>
        </div>

        <div className="absolute flex flex-col gap-5 left-5 right-5 bottom-8">
          <Button
            text={"Comprar"}
            onClick={() => handleButton(product)}
            type={"button"}
          />

          <Button
            text={"Agregar al Carrito"}
            onClick={handleAddCart}
            type={"button"}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;