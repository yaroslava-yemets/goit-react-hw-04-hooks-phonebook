import { Component } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = (evt) => {
        const { name, value } = evt.currentTarget;

        this.setState({
         [name]: value,
        });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={s.form}>
                <label className={s.label} htmlFor={this.nameInputId}>Name</label>
                <input
                    className={s.input}
                    value={this.state.name}
                    type="text"
                    name="name"
                    id={this.nameInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={this.handleChange}
                />

                <label className={s.label} htmlFor={this.numberInputId}>Number</label>
                <input
                    className={s.input} 
                    value={this.state.number}
                    type="tel"
                    name="number"
                    id={this.numberInputId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={this.handleChange}
                />
                
                <button
                className={s.button}
                    type="submit"
                >
                    Add contact
                </button>
            </form>
        );
    };
};

export default ContactForm;