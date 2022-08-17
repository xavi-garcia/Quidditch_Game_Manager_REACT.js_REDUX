import {connect} from 'react-redux'

const Beaters = ({beaters}) => (
    <section>
        <h2>Beaters</h2>
       <div className="players-container">
        {
            beaters.map(beater =>(
            <article>
                <img src={beater.thumbnail} alt={beater.name}></img>
                <h4>{beater.name}</h4>
                <button>X</button>
            </article>
            ))
        }
       </div>
    </section>
);

const mapStateToProps = state => ({
    beaters: state.beaters
});

const mapDispatchToProps = dispatch =>({});

export default connect(mapStateToProps, mapDispatchToProps)(Beaters);