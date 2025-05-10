import img from '../assets/default-man.png';
import '../styles/card.css';

const Card1 = () => {
    const name = 'Basic Humanbeing';
    const title = 'Just a person'; //Card info, gets used down below
    const email = 'basic@humanbeing.com';

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
export default Card1;