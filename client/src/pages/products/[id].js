import Heading from "@/components/Heading";
import ProductDetail from "@/components/ProductDetail";
import { getFeaturedProducts, getProductById } from "@/utils/api";

function ProductDetailPage({ product }) {
  // In case fallback is set to true here
  if (!product) {
    return <Heading position="center">Loading..</Heading>;
  }
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}

export async function getStaticProps(context) {
  const productId = context.params.id;

  const product = await getProductById(productId);

  console.log(product);

  const notFound = product ? false : true;

  return {
    props: {
      product: product.data.product,
    },
    revalidate: 10,
    notFound,
  };
}

export async function getStaticPaths() {
  const featuredProducts = await getFeaturedProducts();

  const paths = featuredProducts.data.featuredProducts.map((product) => ({
    params: { id: product._id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default ProductDetailPage;
