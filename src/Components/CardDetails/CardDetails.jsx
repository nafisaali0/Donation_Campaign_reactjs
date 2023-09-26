import { Link, useLoaderData, useParams } from "react-router-dom";

// import PropTypes from 'prop-types';
const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => card.id == id)
    console.log(id)
    console.log(card)
    const { price, title, description, details_image, title_color } = card
    return (
        <div className="p-5">
            <div className="relative">
                <figure><img className='w-full rounded-xl my-5 ' src={details_image} alt='card' /></figure>
                <div className="absolute w-full bottom-0 h-16 md:h-24 p-5  bg-[#0B0B0B80] ">
                    <Link to={'/donation'} className="px-3 py-2 md:px-4 md:py-3 rounded-md text-white text-xl" style={{ background: title_color }}>Donate ${price}</Link>
                </div>
            </div>
            <div className="text-[#0B0B0B]">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-xl">{description}</p>
            </div>
        </div>
    );
};

// CardDetails.propTypes = {

// };

export default CardDetails;