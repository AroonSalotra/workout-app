const Background = (props) => {
    const { imgUrl } = props;
    return (
        <div className="wrapper-bg">
            <img
                className="bg-image"
                src={imgUrl} alt="" />
        </div>
    );
}

export default Background;