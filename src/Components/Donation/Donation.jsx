// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationCard } from "../../Utility/localStorage";

const Donation = () => {
    const cards = useLoaderData();
    const [donatedCard, setDonatedCard] = useState()
    useEffect(() => {
        const storelocalStorageCard = getStoredDonationCard();
        const donateCardId = []

        if (cards.length > 0) {
            for (const id of storelocalStorageCard) {
                const card = cards.find(cardId => cardId.id === id)
                // console.log(card)
                if(card) {
                    donateCardId.push(card)
                }
            }
        }setDonatedCard(donateCardId)
         console.log(donatedCard)
    }, [])
    return (
        <div>
            <h2>Donation: {donatedCard.length}</h2>
        </div>
    );
};

// Donation.propTypes = {

// };

export default Donation;