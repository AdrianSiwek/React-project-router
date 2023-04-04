import { useState } from 'react';
import styles from '../../styles/ContactPage.module.css';


const Contact = () => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return ( 
        <div className='contact'>
            <form onSubmit={handleSubmit}>
                <h3>Napisz do Nas</h3>
                <textarea
                    className={styles.textarea}
                    value={value}
                    onChange={handleChange}
                    placeholder='Zostaw kontakt...'>
                </textarea>
                <button className={styles.button}>Wyślij</button>
            </form>
            {/* <Prompt
                when={value === ''}
                message="Masz nie dokończony formularz. Czy napewno chcesz opuścić stronę?" 
            /> */}
        </div>
     );
}
 
export default Contact;