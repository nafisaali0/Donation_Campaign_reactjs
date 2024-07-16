import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Card = ({ card }) => {

    const { id, category_name, title, card_image, category_text, title_color, category_bg } = card

    return (
        <>
            <Link to={`/carddetails/${id}`}>
                <div className="card shadow-xl flex flex-col h-full" style={{ background: category_bg }}>
                    <figure className="w-full h-64 overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={card_image}
                            alt="category_image"
                        />
                    </figure>
                    <div className="card-body flex flex-col flex-grow">
                        <h2 className="card-title" style={{ color: title_color }}>{title}</h2>
                        <div className="mt-auto justify-end">
                            <button className="btn border-none" style={{ color: category_text, background: category_bg }}>{category_name}</button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

Card.propTypes = {
    card: PropTypes.obj
};

export default Card;