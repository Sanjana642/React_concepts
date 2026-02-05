// import styles from './Button.module.css';


function ButtonInline() {
    const styles = {
       
            backgroundColor: 'rgba(26, 26, 142, 0.723)',
            padding: '10px 20px',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
        
    };


    return (
        // <button className={styles.button}>Click Me</button>
        <button style={styles}>Click Me</button>
    );
}

export default ButtonInline;