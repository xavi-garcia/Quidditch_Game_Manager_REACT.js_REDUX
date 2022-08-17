import {connect} from 'react-redux' //Con esto conectamos al initialState

const Players = ({players, addChaser}) => (
    <section>
        <h2>Quidditch Players</h2>
       <div className="players-container">
        {
            players.map(player =>( 
            <article key={player.id}>
                <img src={player.thumbnail} alt={player.name}></img>
                <h3>{player.name}</h3>
                <div>
                    <button onClick={() => addChaser(player)}>Chaser</button>
                    <button>Seeker</button>
                    <button>Beater</button>
                    <button>Keeper</button>
                </div>
            </article>
            ))
        }
       </div>

    </section>
)

const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToProps = dispatch =>({
    addChaser(chaser){
        dispatch({
            type: 'ADD_CHASER',
            chaser
        })
    }
}); //funciones que se convierten en propiedades

export default connect(mapStateToProps, mapDispatchToProps)(Players)