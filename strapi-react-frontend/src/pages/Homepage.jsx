

import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";


const REVIEWS = gql`
  query GetReviews{
    reviews {
    data {
      id,
      attributes{
        title
        rating
        body
      }
    }
  }
  }
`

export default function Homepage() {

  const { isLoading, error, data } = useQuery(REVIEWS)

  if (isLoading) return <p className="text-center text-orange-600 text-xl">Loading...</p>;
  if (error) return <p className="text-center text-orange-600 text-xl">Error: {error}</p>;

  return (
    <div className="w-3/4 mx-auto bg-slate-300 p-5 pt-2 mt-3 rounded-md">
      <h5 className="mx-auto font-bold text-5xl text-white px-24 rounded-2xl bg-blue-600 text-center mb-5 w-fit">Reviews</h5>

      {data&&data.reviews.data.map(review => (
        <div key={review.id} className="max-w-3/4 rounded overflow-hidden shadow-lg bg-slate-600 mb-5">
          <p className="text-white bg-pink-600 w-fit p-5 rounded-xl text-3xl mb-2">{review.attributes.rating}</p>
          <div className="px-6 py-4">
            <div className=" text-white font-bold text-xl mb-2">{review.attributes.title}</div>
            <p className="text-white text-base">{review.attributes.body[0].children[0].text.substring(0,400)}...</p>
            <Link to={`/details/${review.id}`} className="text-green-500 text-base">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
