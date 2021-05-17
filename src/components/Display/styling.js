export const STYLES = {
  board: {
    height: '100vh',
    backgroundColor: 'rgb(173, 208, 173)',
    display: 'grid',
    playable: {
      maxHeight: 'calc(9*4.9rem)',
      padding: '0 1em',
      borderRadius: '.25em',
      backgroundColor: 'rgb(141, 179, 141)',
      margin: '1em auto 5em',
      gridTemplateRows: 'repeat(9, 4.9rem)',
      gridTemplateColumns: 'repeat(7, 7rem)',
      display: 'grid'
    },
    path: {
      fontSize: '12px'
    },
    status: {
      position: 'fixed',
      bottom: '0',
      width: '100%',
      color: 'white',
      backgroundColor: 'rgb(64, 78, 67)',
      height: '3em',
      gameInfo: {
        fontSize: '.8rem',
        padding: '.8rem 2em',
        float: 'right',
        display: 'inline-block',
        fontFamily: 'monospace',
        color: '#ffffff',
        lineHeight: '1.5rem'
      },
      playerInfo: {
        color: '#404e43',
        fontSize: '0.9rem',
        fontWeight: '400',
        display: 'inline-block',
        padding: '0.3rem 1.5rem 0.3rem 3.4rem',
        backgroundColor: 'rgb(173, 208, 173)',
        margin: '0.5rem 0.8rem 0px',
        borderRadius: '0.2rem',
        lineHeight: '1.33rem'
      },
      icon: {
        position: 'absolute',
        width: '2.15rem',
        top: '.33rem',
        left: '1.25rem'
      }
    }
  },
  fichaStyling: {
    fichaDisplayLeft: {
      border: '1px solid #7a7a7a',
      boxShadow: '2px -2px 0px 0px rgb(108, 107, 105)',
      transform: 'rotate(0deg)',
      bottom: '0',
      position: 'unset',
      margin: '-7px 8px'
    },
    fichaDisplayRight: {
      border: '1px solid #7a7a7a',
      boxShadow: '2px -2px 0px 0px rgb(108, 107, 105)',
      transform: 'rotate(0deg)',
      bottom: '0',
      position: 'unset',
      margin: '-8px 55px'
    },
    fichaDisplayMinus90: {
      border: '1px solid #7a7a7a',
      boxShadow: '2px 2px 0px 0px rgb(108, 107, 105)',
      transform: 'rotate(-90deg)',
      bottom: '0',
      position: 'unset',
      margin: '-8px 30px'
    },
    fichaDisplayPlus90: {
      border: '1px solid #7a7a7a',
      boxShadow: '-2px -2px 0px 0px rgb(108, 107, 105)',
      transform: 'rotate(90deg)',
      bottom: '0',
      position: 'unset',
      margin: '-6px 0px -14px 32px'
    }
  }
};
