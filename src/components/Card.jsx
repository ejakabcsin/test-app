//import '../styles/card.css';
import style from '../styles/card.module.css'
import PropTypes from 'prop-types';

const Card = ({img, name, title, email, animate, updateAnimate}) => { //the cards
    return (
        <div className={`${style["profile-card"]} ${animate ? style["is-entering"] : ""}`} //check on the animations (imported from css) as well as the cards, 
        onAnimationEnd={updateAnimate}
        > 
            <div className={style["profile-card__image"]}>
                <img src={img} alt={name} />
            </div>
            <div className={style["profile-card__content"]}>
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}

Card.propTypes = { //prop. All 4 entries are strings
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string, 
    email: PropTypes.string.isRequired
}
export default Card;