// import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Card from "../card/card";

const CategoryCard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('cards.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    console.log(cards)
    return (
        <div>
            <h2>Category:{cards.length} </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 p-5 mb-5">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

// CategoryCard.propTypes = {

// };

export default CategoryCard;