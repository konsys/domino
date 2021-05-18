import React from 'react';
import { makeMove, watchBoard } from '../actions';
import PlayerStatus from './PlayerStatus';
import { STYLES } from '../assets/styling';
import { connect } from 'react-redux';
import Ficha from './Ficha';
import boardRenderHelper from '../helpers/boardRenderHelper';
import c from '../constants';

class PlayBoard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.props.dispatch(watchBoard(this.props.gameId));
  }

  handleDrop(event: any, dispatch: any) {
    let ficha = JSON.parse(event.dataTransfer.getData('ficha'));
    dispatch(makeMove(ficha, event.target.id));
  }

  render() {
    const { dispatch, fichas, gameId } = this.props;

    const renderedOutput = Object.keys(fichas).length
      ? boardRenderHelper(fichas)
      : Array(40).fill(null);

    return (
      <div
        style={STYLES.board}
        className="board"
        onDrop={(event) => {
          this.handleDrop(event, dispatch);
          if (event.target.id) {
            document.getElementById(event.target.id).style.border = 'unset';
          }
        }}
        onDragEnter={(event: any) => {
          if (event.target.id && !event.target.childElementCount) {
            document.getElementById(event.target.id).style.border =
              '5px dotted #99b999';
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDragLeave={(event: any) => {
          if (event.target.id) {
            document.getElementById(event.target.id).style.border = 'unset';
          }
        }}
      >
        <PlayerStatus gameId={gameId} />
        <div style={STYLES.board.playable}>
          {renderedOutput.map((ficha, i) =>
            ficha ? (
              <div key={i} id={c.fichasGrid[i]?.toString()} className="path">
                <Ficha
                  value={ficha.value}
                  fichaId={ficha.fichaId}
                  renderPos={ficha.renderPos}
                  fichaStyling={ficha.fichaStyling}
                />
              </div>
            ) : (
              <div
                key={i}
                id={c.fichasGrid[i]?.toString()}
                className={c.fichasGrid[i] ? 'path' : undefined}
              >
                &nbsp;
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

const propsFromState = (state: any) => {
  return { fichas: state.fichasInPlay };
};

export default connect(propsFromState)(PlayBoard);
