import { useEffect, useState } from "react";
import { loadAuthProducts } from "../../services/api.services";
import type { IProduct } from "../../models/IProduct";
import { AuthResourceComponent } from "./AuthResourceComponent";
import { useAuthRefresh } from "../../hooks/useAuthRefresh";

export const AuthResourcesListComponent = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { handleRefresh } = useAuthRefresh();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        await handleRefresh();
        const productsData = await loadAuthProducts();
        setProducts(productsData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load products";
        setError(errorMessage);
        console.log("error", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.map((product) => (
        <AuthResourceComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AuthResourcesListComponent;
