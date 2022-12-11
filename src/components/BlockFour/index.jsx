import "./BlockFour.css";
import design from "../Images/design.png";
import follow from "../Images/follow.png";

export const BlockFour = () => {
    return (
        <div className="container block_four">
                <div className="core">
                    <p className="our_core">Our Core Features</p>
                    <h1 className="our_servic">Our Services</h1>
                </div>
                <div>
                    <img className="design" src={design} />
                </div>
                <div>
                    <img className="follow" src={follow} />
                </div>
        </div>
    )
}