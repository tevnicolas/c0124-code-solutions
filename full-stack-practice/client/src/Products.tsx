import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product, toDollars } from './lib';
import { Link } from 'react-router-dom';

export function Products() {
  const [error, setError] = useState<unknown>();
  const [item, setItem] = useState<Product>();
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function loadItemPage() {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok)
          throw new Error(
            `Bad network response with status ${response.status}`
          );
        const result = await response.json();
        setItem(result);
      } catch (error) {
        setError(error);
      }
    }
    loadItemPage();
  }, [productId]);

  if (error) {
    return <div>{`Oh No! ${error}`}</div>;
  }

  if (!item) return null;

  const { imageUrl, name, price, shortDescription, longDescription } = item;
  return (
    <div className="container">
      <div className="row outline">
        <div className="column-full">
          <Link to="/" className="link">
            <p>{`< Back to Catalog`}</p>
          </Link>
        </div>
        <div className="column-half">
          <div className="image-container page-image">
            <img className="image" src={imageUrl} />
          </div>
        </div>
        <div className="column-half">
          <div className="full-length">
            <h2>{name}</h2>
          </div>
          <div className="full-length">
            <p>{toDollars(price)}</p>
          </div>
          <div className="full-length">
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="column-full">{longDescription}</div>
      </div>
      <div className="column-full">
        <button
          onClick={() => {
            alert(`Added ${name} to cart!`);
            navigate('/');
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
