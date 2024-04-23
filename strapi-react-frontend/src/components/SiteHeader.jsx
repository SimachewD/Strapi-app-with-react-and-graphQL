import { Link, NavLink } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const CATEGORIES = gql`
    query GetCategories {
      categories {
        data {
          id,
          attributes{
            name
          }
        }
      }
    }`

export default function SiteHeader() {

  const { isLoading, error, data } = useQuery(CATEGORIES)

  if (isLoading) return <p className="text-center text-orange-600 text-xl">Loading...</p>;
  if (error) return <p className="text-center text-orange-600 text-xl">Error: {error}</p>;

  return (
    <>
    <header className=" bg-gray-800 p-4">
      <nav className="container text-white mx-16">
        <div>
          <Link to="/" className="font-bold text-xl">My Restaurant Reviews</Link>
        </div>
      </nav>
    </header>
    <div className="pl-64 mb-12 mt-2">
      <span>Filter Reviews by Categories:</span>
      {data && data.categories.data.map(category=>(
        <NavLink key={category.id} to={`/category/${category.id}`} className={' bg-sky-700 text-slate-200 rounded-lg ml-2 p-1'}>{category.attributes.name}</NavLink>
      ))}
    </div>
     </>   
  );
}
