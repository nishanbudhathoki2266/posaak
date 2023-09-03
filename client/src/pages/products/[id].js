import Loader from "@/components/Loader";
import ProductDetail from "@/components/ProductDetail";
import { getFeaturedProducts, getProductById } from "@/utils/api";

function ProductDetailPage({ product }) {
  // In case fallback is set to true here
  if (!product) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <ProductDetail product={product.data.product} />
    </div>
  );
}

export async function getStaticProps(context) {
  const productId = context.params.id;

  const product = await getProductById(productId);

  const notFound = product.status !== "success";

  return {
    props: {
      product,
    },
    revalidate: 10,
    notFound,
  };
}

export async function getStaticPaths() {
  const featuredProducts = await getFeaturedProducts();

  const paths = featuredProducts.data.featuredProducts.map((product) => ({
    params: { id: `${product._id}` },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default ProductDetailPage;
