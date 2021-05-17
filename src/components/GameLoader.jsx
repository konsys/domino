import React from 'react';
import PropTypes from 'prop-types';
import randomWords from 'random-words'; //eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { startGame, grabFichas } from '../actions';
import PlayBoard from './PlayBoard';
import Hand from './Hand';
import GameSelect from './GameSelect';
import { STYLES } from '../assets/styling';

class GameLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.dispatch = this.props.dispatch;
    this.handleHostGame = this.handleHostGame.bind(this);
    this.handleJoinGame = this.handleJoinGame.bind(this);
  }

  handleHostGame() {
    const gameId = randomWords(2).join('-');
    this.setState({ gameId, player: 'p1' });
    this.dispatch(startGame(gameId));
    this.dispatch(grabFichas(gameId, 'p1'));
  }

  handleJoinGame(joinCode) {
    const gameId = joinCode.current.value;

    this.setState({ gameId, player: 'p2' });
    this.dispatch(grabFichas(gameId, 'p2'));
  }

  render() {
    const { gameId, player } = this.state;

    if (gameId) {
      return (
        <div style={STYLES.game}>
          <PlayBoard gameId={gameId} />
          <Hand gameId={gameId} player={player} />
        </div>
      );
    } else {
      return (
        <div style={STYLES.game}>
          <GameSelect
            onHostGame={this.handleHostGame}
            onJoinGame={this.handleJoinGame}
          />
        </div>
      );
    }
  }
}

GameLoader.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(GameLoader);
