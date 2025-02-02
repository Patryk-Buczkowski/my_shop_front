/* eslint-disable */
import React from "react";

export const AddToCart: React.FC = () => {
  return (
    <div
      className={`flex box-border justify-center w-[80%] mt-16 gap-1 h-10 bg-[var(--color-primary)] p-3 relative rounded-full`}
    >
      <div className="w-full z-10 flex h-fit justify-between pr-1 pl-1 gap-1 text-sm">
        /*content*/
      </div>

      <div className="w-[calc(100%-15px)] h-[40px] [clip-path:ellipse(50%_40%_at_50%_50%)] bg-inherit absolute bottom-0 transform -translate-y-[14px]" />
    </div>
  );
};
`{id: item._id,
      title: item.title,
      comments: item.commentsList,
      price: item.price,
      description: item.description,
      quantity: item.quantityAvailable,
      avgRate: item.averageRate,
      rateCount: item.rateCount,
      category: item.category,}`;

      // get one test prouct
  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${backendUrl}/product/6793afe48e74d1a4bbb01c04`
  //       );
  //       if (response) {
  //         setProduct(response.data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getProduct();
  // }, []);

  
