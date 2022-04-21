import styles from './Profile.module.css';
import { Figure } from 'react-bootstrap';

const Profile = () => {

    return (
        <Figure className={styles.profile}>
            <Figure.Image
                width={50}
                height={50}
                alt='avatar'
                src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
            />
            <Figure.Caption>
                <div>Name</div>
                <div>Email</div>
            </Figure.Caption>
        </Figure>
    );
};

export default Profile;