import { useEffect } from 'react';
import { Product, readCatalog, toDollars } from './lib';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [error, setError] = useState<unknown>();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    async function loadItems() {
      try {
        const arr = await readCatalog();
        setItems(arr);
      } catch (error) {
        setError(error);
      }
    }
    loadItems();
  }, []);

  if (error) {
    return (
      <div>
        <p>There's an error loading Catalog!</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div>
          <h1>Catalog</h1>
        </div>
      </div>
      <div className="row">
        <ItemCards items={items} />
      </div>
    </div>
  );
}

type ItemCardsProps = {
  items: Product[];
};

function ItemCards({ items }: ItemCardsProps) {
  return (
    <>
      {items.map((item) => (
        <div className="column-one-third">
          <div className="image-container">
            <img className="image" src={item.imageUrl} />
          </div>
          <div className="text-container">
            <Link to={`/products/${item.productId}`} className="link">
              <h3>{item.name}</h3>
            </Link>
            <p>{toDollars(item.price)}</p>
            <p>{item.shortDescription}</p>
          </div>
        </div>
      ))}
    </>
  );
}
