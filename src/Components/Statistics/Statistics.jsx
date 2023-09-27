import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonationCard } from '../../Utility/localStorage';
ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {

    const totalCards = useLoaderData();
    const [loadCard, setLoadCard] = useState([]);

    useEffect(() => {
        const getLoadCard = getStoredDonationCard([]);
        setLoadCard(getLoadCard)
    }, [])

    const donatedPercentage = (loadCard.length / totalCards.length) * 100;
    console.log(donatedPercentage)

    const totalCard = 100 - donatedPercentage;
    console.log(totalCard)

    
    const data = {
        
        datasets: [
            {
                data: [donatedPercentage, totalCard],
                backgroundColor: [
                    '#00C49F',
                    '#FF444A',
                ],
                label: '# of Votes',
                borderWidth: 1,
            },
        ],
        labels: ['Your Donation', 'Total Donation'],
    };
    const options = {
        responsiv: true,
        maintainAspectRatio: false,
    }
    return (
        <div>
            <Pie height={450} width={450} data={data} options={options} />
        </div>
    );
};

export default Statistics;