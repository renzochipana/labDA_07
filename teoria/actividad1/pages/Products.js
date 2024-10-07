import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='search products' />
      </div>
      <div>
        <Link to='featured'>Features</Link>
        <span> | </span> {/* Añadir un separador */}
        <Link to='new'>New</Link>
      </div>
      <Outlet />
    </>
  );
};
