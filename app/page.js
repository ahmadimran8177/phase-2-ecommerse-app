import "@/app/styles.css";
import { getAllProducts } from "@/app/dataRepository/queryFunc";
import Image from "next/image";
// import Form from "@/app/ui/form";
import Link from "next/link";
import { getSearchProducts } from "@/app/dataRepository/queryFunc";

const Home = async () => {
  const products = await getAllProducts();
  const productsFromSearch = await getSearchProducts("");
  function searchProductFunc(e) {
    console.log(e);
  }
  return (
    <div>
      <main>
        <section className="search-container">
          <div className="form">
            <input
              type="search"
              name="search"
              id="search"
              // onChange={(e) => {
              //   searchProductFunc(e);
              // }}
              placeholder="Type to search products"
            />
          </div>
        </section>
        <section className="product-container" id="product-container">
          {products?.map((product, i) => (
            <Link className="product" href={`/product/${product?.id}`} key={i}>
              <Image
                width={400}
                height={400}
                className="product-image"
                src={product?.imageUrl}
                alt="Tom &amp; Jarry T-Shirt"
              />
              <h1 class="product-name">{product?.name}</h1>
              <p class="product-price">{product?.stock}</p>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
