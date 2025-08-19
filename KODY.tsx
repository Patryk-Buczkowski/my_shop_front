/* eslint-disable */
import React from "react";

export const AddToCart: React.FC = () => {
  return (
    <div
      className={`relative mt-16 box-border flex h-10 w-[80%] justify-center gap-1 rounded-full bg-[var(--color-primary)] p-3`}
    >
      <div className="z-10 flex h-fit w-full justify-between gap-1 pl-1 pr-1 text-sm">
        /*content*/
      </div>

      <div className="absolute bottom-0 h-[40px] w-[calc(100%-15px)] -translate-y-[14px] transform bg-inherit [clip-path:ellipse(50%_40%_at_50%_50%)]" />
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
