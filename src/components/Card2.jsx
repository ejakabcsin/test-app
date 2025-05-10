import img from '../assets/default-woman.png';
import '../styles/card.css';

const Card2 = () => {
    const name = 'Another Humanbeing';
    const title = 'VIP of person';
    const email = 'wow@important.com';

    return (
        <div className="profile-card">
            <div className="profile-card__image">
                <img src={img} alt={name} />
            </div>
            <div className="profile-card__content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}

export default Card2;