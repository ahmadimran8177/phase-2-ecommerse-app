import "@/app/styles.css";
import { getAllProducts } from "@/app/dataRepository/queryFunc";
import Image from "next/image";

const Home = async () => {
  // const products = await fetch("http://localhost:3000/api/getAllProducts");
  const products = await getAllProducts();
  return (
    <div>
      <main>
        <section className="search-container">
          <form className="form">
            <input
              type="search"
              name="search"
              id="search"
              // oninput="searchProduct()"
              placeholder="Type to search products"
            />
          </form>
        </section>
        <section className="product-container" id="product-container">
          {products?.map((product,i) => (
            <a className="product" href={`/product/${product?.id}`} key={i}>
              <Image
              width={400}
              height={400}
                class="product-image"
                src={product?.imageUrl}
                alt="Tom &amp; Jarry T-Shirt"
              />
              <h1 class="product-name">{product?.name}</h1>
              <p class="product-price">{product?.stock}</p>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
