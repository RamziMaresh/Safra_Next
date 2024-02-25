import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Safra Co. Ltd.",
  description: "",
  // other metadata
};

const Products = () => {
  return (
    <>
      <section
        id="products"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"

      >
        <h1 className="text-2xl text-center p-10">Product Page</h1>
        <h4 className="text-2xl text-center pb-5 text-red-500 font-bold">Under Processing...</h4>
      </section>
    </>
  )
}
export default Products