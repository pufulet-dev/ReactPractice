import "./Card.css";

function Card({setValue, ...props}) {
    const classes = 'card ' + props.className;

    return (
        <div className={classes} onClick={() => {
            setValue?.('alta valoare')
        }}>{props.children}</div>
    );
}

export default Card;