export default function Pagination(props){
    return (
        <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link"onClick={()=>{props.prev()}}>Previous</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" onClick={()=>{props.next()}}>Next</a>
                    </li>
                </ul>
        </nav>
    )
}