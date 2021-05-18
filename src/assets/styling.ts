export const STYLES = {
  gameSelect: {
    footer: {
      image: { width: '22px', padding: '0 .5em', verticalAlign: 'middle' },
      lineHeight: '1.2em',
      padding: '.5em 0 0',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      height: '2em',
      textAlign: 'left',
      left: '0',
      color: 'white',
      background: 'rgb(64, 78, 67)',
      fontWeight: 100
    },
    image: {
      opacity: '.8',
      position: 'fixed',
      bottom: '0',
      right: '0',
      marginBottom: '2.5em'
    },
    zIndex: 99,
    boxShadow: '1px 1px 4px 0px rgba(64, 78, 67, 0.55)',
    padding: '1em',
    textAlign: 'center',
    display: 'table',
    width: '300px',
    margin: '5em auto',
    height: '30em',
    borderRadius: '.5em',
    background: 'rgba(152, 179, 152, 0.9)',
    button: {
      join: {
        cursor: 'pointer',
        margin: '10em 0 0',
        display: 'inline-block',
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(64, 78, 67)',
        border: '1px solid transparent',
        padding: '0.375em 0.75em',
        fontSize: '1em',
        lineHeight: '1.5',
        borderRadius: '0.25em',
        width: '66%'
      },
      cursor: 'pointer',
      margin: '3em 1em 4em',
      display: 'inline-block',
      color: '#fff',
      backgroundColor: 'rgb(64, 78, 67)',
      borderColor: '#1e7e34',
      border: '1px solid transparent',
      padding: '.375em .75em',
      fontSize: '1em',
      lineHeight: '1.5',
      borderRadius: '.25em'
    },
    input: {
      textAlign: 'center',
      display: 'block',
      width: '85%',
      padding: '.5em',
      fontSize: '1.2em',
      fontWeight: '400',
      lineHeight: '1.5em',
      color: 'rgb(73, 80, 87)',
      backgroundColor: 'rgb(255, 255, 255)',
      border: '1px solid rgb(206, 212, 218)',
      borderRadius: '0.25em',
      boxSizing: 'border-box',
      margin: '0 auto'
    }
  },
  fichaStyling: {
    dropZoneView: {
      border: '1px solid #7a7a7a',
      boxShadow: 'rgb(108, 107, 105) 0.1em 0.1em',
      // bottom: '0',
      margin: '0'
    },
    controllerView: {
      border: '1px solid #7a7a7a',
      boxShadow: 'rgb(108, 107, 105) 0.1em 0.1em'
    },
    fichaInHand: {
      borderBottom: '1px solid #7a7a7a',
      borderLeft: '1px solid #7a7a7a',
      boxShadow: '4px -4px 0px 0px rgb(108, 107, 105)'
    },
    fichaOnBoardLeft: {
      borderBottom: '1px solid #7a7a7a',
      borderLeft: '1px solid #7a7a7a',
      boxShadow: '4px -4px 0px 0px rgb(108, 107, 105)',
      transform: 'rotate(0deg) scale(.85)',
      bottom: 'unset',
      position: 'unset',
      margin: '-10px 0'
    },
    fichaOnBoardRight: {
      borderBottom: '1px solid #7a7a7a',
      borderLeft: '1px solid #7a7a7a',
      boxShadow: '4px -4px 0px 0px rgb(108, 107, 105)',
      transform: 'rotate(0deg) scale(.85)',
      bottom: 'unset',
      position: 'unset',
      margin: '-15px 55px'
    },
    fichaOnBoardMinus90: {
      // horiz positions -3 through 4
      borderTop: '1px solid #7a7a7a',
      borderLeft: '1px solid #7a7a7a',
      boxShadow: '4px 4px 0px 0px rgb(108, 107, 105)',
      transform: 'rotate(-90deg) scale(.85)',
      bottom: 'unset',
      position: 'unset',
      margin: '-10px 30px'
    },
    fichaOnBoardPlus90: {
      // horiz positions -12 through -5 and 6 through 13
      borderBottom: '1px solid #7a7a7a',
      borderRight: '1px solid #7a7a7a',
      boxShadow: '-4px -4px 0px 0px rgb(108, 107, 105)',
      transform: 'rotate(90deg) scale(.85)',
      bottom: 'unset',
      position: 'unset',
      margin: '-6px 0px -14px 32px'
    }
  },
  game: {
    display: 'grid',
    gridTemplateRows: '[board] auto [hand] 7em',
    boxSizing: 'border-box',
    background: '#add0ad',
    height: '100vh'
  },
  board: {
    display: 'grid',
    gridTemplateColumns: '[status] 10em [playable] auto',
    gridRow: 'board / board',

    playable: {
      gridColumn: 'playable / playable',
      gridTemplateRows: 'repeat(5, 1fr)',
      gridTemplateColumns: 'repeat(8, 140px)',
      display: 'grid',
      border: '1px solid #b6b6b638',
      height: '100%',
      boxSizing: 'border-box'
    },
    gridRowStart: 'board',
    gridRowEnd: 'board'
  },
  status: {
    box: {
      background: 'rgb(141, 179, 141)',
      borderRadius: '.8em',
      margin: '.5em',
      padding: '1em'
    },
    gridColumn: 'status / status'
  },
  player: {
    face: {
      height: '1em',
      fontSize: '3.3em',
      borderRadius: '100%',
      margin: '0px auto .1em',
      width: '1em',
      padding: '0.3em',
      lineHeight: '1.2em',
      background: 'rgb(173, 208, 173)'
    },
    textAlign: 'center',
    marginBottom: '1em'
  },
  activePlayersHand: {
    fichas: { display: 'table', margin: '0 auto' },
    ficha: {
      bottom: '50px',
      margin: '.7em',
      position: 'relative',
      display: 'inline-block',
      background: 'rgb(255, 253, 235)',
      borderRadius: '0.33em'
    },
    face: {
      padding: '.62em',
      gridTemplateColumns: 'repeat(3,1 fr)',
      gridTemplateRows: 'repeat(3, 1 fr)',
      gap: '.32em',
      display: 'inline-grid',
      cursor: 'pointer'
    },
    dot: {
      height: '.66em',
      width: '.66em'
    },
    line: {
      margin: '0 .33em'
    },
    backgroundImage:
      'linear-gradient(to right, rgb(173, 208, 173) , rgb(141, 179, 141), rgb(173, 208, 173))',
    width: '100%',
    gridRowStart: 'hand',
    gridRowEnd: 'hand'
  }
};
