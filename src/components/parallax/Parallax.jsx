import "./parallax.scss";

const Parallax = ({ type }) => {
    return (
        <div className="parallax">
            <h1>{type ? "What I do?" : "What I did?"}</h1>
            <div className="mountains"></div>
            <div className="planets"></div>
            <div className="stars"></div>
        </div>
    );
};

export default Parallax;