import './Scroll.css';

const Scroll = () => {

    const scroll = () => {
        window.scrollTo(0,0);
    }

    return(
        <div className="scroll" onClick={scroll}>
            <a 
            
            class="lni lni-arrow-up"></a>
        </div>
    )
}

export default Scroll;