// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationCard } from "../../Utility/localStorage";
// import Banner from "../Banner/Banner";

const Donation = () => {
    const cards = useLoaderData();
    const [donatedCard, setDonatedCard] = useState([])
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        const storelocalStorageCard = getStoredDonationCard();
        const donateCardId = []

        if (cards.length > 0) {
            for (const id of storelocalStorageCard) {
                const card = cards.find(cardId => cardId.id === id)
                // console.log(card)
                if (card) {
                    donateCardId.push(card)
                }
            }
        } setDonatedCard(donateCardId)
    }, [])
    // console.log(donatedCard)

    // const { price, title,  details_image, category_name, card_image, category_text, title_color, category_bg } = donatedCard;
    return (
        <>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10 mb-10">
                {
                    donatedCard.slice(0, dataLength).map(donateCard =>
                        <div key={donateCard.id} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{ background: donateCard.category_bg }}>
                            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                <img
                                    src={donateCard.card_image}
                                    alt="image"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <button className="text-center font-semibold w-24 px-3 py-2 rounded-md mb-3" style={{ color: donateCard.category_text, background: donateCard.category_bg }}>{donateCard.category_name}</button>
                                <p className='font-bold mb-3' style={{ color: donateCard.title_color }}>{donateCard.title}</p>
                                <p className='font-bold mb-3' style={{ color: donateCard.title_color }}>{donateCard.price}$</p>
                                <button className="text-center font-semibold w-36 px-5 py-2 text-white rounded-md" style={{ background: donateCard.title_color }}>View Details</button>
                            </div>
                        </div>
                    )

                }

            </div>

            <div className={`flex justify-center items-center my-10 ${dataLength == donatedCard.length ? 'hidden' : ""}`}>
                <button onClick={() => setDataLength(donatedCard.length)} className="text-center font-semibold bg-[#009444] px-5 py-2 text-white rounded-md">See More</button>
            </div>

        </>

    );
};

// Donation.propTypes = {

// };

export default Donation;