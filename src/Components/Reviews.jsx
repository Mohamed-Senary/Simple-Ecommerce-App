export default function Reviews ({review}){
    return(
        <div className="list-group col-12 my-2">
            <a className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{review.reviewerName}</h5>
                    <small className="text-body-secondary">{review.date.split("T")[0]}</small>
                </div>
                    <p className="mb-1">{review.comment}</p>
            </a>
        </div>
    )
}