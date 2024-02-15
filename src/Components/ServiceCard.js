function ServiceCard(props) {
    return (

        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item first mx-3 px-0 rounded-4" style={{ "width": "18rem" }}>
            <div class="card-title">
                <h5 class="card-text fw-bold my-4 px-3">{props.title}</h5>
            </div>
            <div class="card-body text-muted px-3 py-0 mb-2">
                <p class="card-text">{props.description}</p>
            </div>
            <img src={props.img} class="card-img-bottom w-100  " alt={props.alt} />

        </div>

    )
}
export default ServiceCard;