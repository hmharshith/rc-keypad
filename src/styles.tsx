const GlobalStyles = {
  test: {
    fontWeight: 600,
    color: 'red',
  },
  container: {
    width: '98%',
    maxWidth: '600px',
    maxHeight: '300px',
    padding: '5px',
    backgroundColor: '#f2f2f2',
  },
  containerDark: {
    backgroundColor: '#A0AEC0',
  },
  keypadContainer: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gap: '3px'
  },
  alphaRow1: {
    gridArea: '1',
  },
  alphaRow2: {
    gridArea: '2',
  },
  alphaRow3: {
    gridArea: '3',
  },
  btn: {
    cursor: 'pointer',
    width: '100%',
    height: '50px',
    border: 'none',
    backgroundColor: '#d3d6da',
    borderRadius: '5px',
    color: '#1A202C',
  },
  btnDark: {
    backgroundColor: '#2D3748',
    color: 'rgba(255, 255, 255, 0.92)'
  },
  enterBtn: {
    gridArea: '3 / 1 / span 1 / span 2',
  },
  capsBtn: {
    gridArea: '2 / 1 / span 1 / span 1',
  },
  capsOn: {
    backgroundColor: '#bfbfbf',
  },
  capsOnDark: {
    backgroundColor: '#000',
  },
  cancelBtn: {
    gridArea: '3 / 10',
  }
}

export default GlobalStyles;