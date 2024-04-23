import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client";


const REVIEW = gql`
  query GetReviews($id:ID!){
    review(id:$id) {
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

export default function ReviewDetails() {

  const {id} = useParams()
  const { isLoading, error, data } = useQuery(REVIEW,
    {
      variables: { id:id }
    }
  )

  return (
    <div className="w-1/2 mx-auto bg-slate-600 p-5 pt-2 mt-3 text-white rounded-md">
      <h5 className="font-bold text-2xl">Details</h5>
        {isLoading && <p className=" text-center text-orange-500 font-semibold">Loading.... Please Wait</p>}
        {error && <p className=" text-red-600 font-semibold text-center">Something wrong {error}</p>}
        {data &&
            <div key={data.id} className="max-w-3/4 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className=" text-white font-bold text-xl mb-2">{data.review.data.attributes.title}</div>
                <p className="text-white text-base">{data.review.data.attributes.rating}</p>
                <p className="text-white text-base">{data.review.data.attributes.body[0].children[0].text}</p>
              </div>
            </div>}
    </div>
  )
}
