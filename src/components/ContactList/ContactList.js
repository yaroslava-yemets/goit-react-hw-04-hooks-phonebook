import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => (
    <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
                <span>{name}:</span>
                <span>{number}</span>
                <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;