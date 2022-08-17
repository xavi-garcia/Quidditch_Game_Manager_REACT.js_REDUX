import {connect} from 'react-redux'

const Chasers = ({chasers}) => (
    <section>
        <h2>Chasers</h2>
       <div className="players-container">
        {
            chasers.map(chaser =>(
            <article>
                <img src={chaser.thumbnail} alt={chaser.name}></img>
                <h4>{chaser.name}</h4>
                <button>X</button>
            </article>
            ))
        }
       </div>
    </section>
);

const mapStateToProps = state => ({
    chasers: state.chasers
});

const mapDispatchToProps = dispatch =>({});

export default connect(mapStateToProps, mapDispatchToProps)(Chasers);