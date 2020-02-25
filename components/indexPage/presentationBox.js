const PresentationBox = props => (
    <div className="presentationBox">
        {/* <img /> */}
        <div>
            <h2>{props.title}</h2>
        </div>
        <p>{props.text}</p>
    </div>
);

export default PresentationBox