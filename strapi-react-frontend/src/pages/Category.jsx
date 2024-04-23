import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id:ID!){
    category(id:$id) {
    data {
      id,
      attributes{
        name,
        reviews {
          data {
            id,
            attributes{
              title,
              rating,
              body,
              categories {
                data {
                  id,
                  attributes{
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  }
`


export default function Category() {


  const {id} = useParams()
  const { data } = useQuery(CATEGORY,
    {
      variables: { id:id }
    }
  ) 


  return (
    <div className="w-1/2 mx-auto bg-slate-600 p-5 pt-2 mt-3 text-white rounded-md">
      <h2 className="font-bold text-2xl">{data&&data.category.data.attributes.name}</h2>
      {data&&data.category.data.attributes.reviews.data.map(review => (
        <div key={review.id} className="max-w-3/4 rounded overflow-hidden shadow-lg bg-slate-600 mb-5">
          <p className="text-white bg-pink-600 w-fit p-5 rounded-xl text-3xl mb-2">{review.attributes.rating}</p>
          <span>{review.attributes.categories.data.map(c=>(<i key={c.id} className="mr-2 text-blue-200">{c.attributes.name}</i>))}</span>
          <div className="px-6 py-4">
            <div className=" text-white font-bold text-xl mb-2">{review.attributes.title}</div>
            <p className="text-white text-base">{review.attributes.body[0].children[0].text.substring(0,400)}...</p>
            <Link to={`/details/${review.id}`} className="text-green-500 text-base">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
