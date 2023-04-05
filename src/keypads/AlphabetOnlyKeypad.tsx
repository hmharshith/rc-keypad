import React, { useState } from "react";
import { KeyPadProps, SpecialKeys } from "..";
import { ALPHABETS } from "./data";
import styles from '../styles';

const AlphabetOnlyKeypad: React.FC<KeyPadProps> = ({ onKeyPress, colorMode }) => {
  const [_case, setCase] = useState<'UPPER' | 'LOWER'>('UPPER');

  const handleKeyPress = (key: string | SpecialKeys) => {
    if (key == SpecialKeys.Capslock) {
      setCase((prev) => prev == 'UPPER' ? 'LOWER' : 'UPPER');
    }
    onKeyPress && onKeyPress(key);
  }

  const alphaKeys = _case == 'UPPER' ? ALPHABETS.map(key => key.toLocaleUpperCase()) : ALPHABETS.map(key => key.toLocaleLowerCase());
  let capsBtnStyle = { ...styles.btn };
  let containerStyle = { ...styles.container };
  let btnStyle = { ...styles.btn };
  if (_case == 'UPPER') {
    capsBtnStyle = { ...capsBtnStyle, ...styles.capsOn };
    if (colorMode == 'dark') {
      capsBtnStyle = { ...capsBtnStyle, ...styles.capsOnDark };
    }
  }
  if (colorMode == 'dark') {
    containerStyle = { ...containerStyle, ...styles.containerDark };
    btnStyle = { ...btnStyle, ...styles.btnDark };
    if (_case == 'LOWER') {
      capsBtnStyle = { ...capsBtnStyle, ...styles.btnDark }
    }
  }
  return <div style={containerStyle}>
    <div style={styles.keypadContainer}>
      <div style={styles.rowContainer}>
        {alphaKeys[0].split('')
          .map(ch => <div style={styles.btnContainer_1}><button
            key={ch}
            style={btnStyle}
            onClick={_ => handleKeyPress(ch)}
          >
            {ch}
          </button>
          </div>
          )}
      </div>
      <div style={styles.rowContainer}>
        <div style={styles.btnContainer_1}>
          <button
            style={capsBtnStyle}
            onClick={_ => handleKeyPress(SpecialKeys.Capslock)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="16" fill={colorMode == 'dark' ? 'rgba(255, 255, 255, 0.92)' : "currentColor"} viewBox="0 0 16 16">
              <path d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z" />
            </svg>
          </button>
        </div>
        {alphaKeys[1].split('')
          .map(ch => <div style={styles.btnContainer_1}><button
            key={ch}
            style={btnStyle}
            onClick={_ => handleKeyPress(ch)}
          >
            {ch}
          </button>
          </div>
          )}
      </div>
      <div style={styles.rowContainer}>
        <div style={styles.btnContainer_2}>
          <button style={{ ...btnStyle, ...styles.enter }} onClick={_ => handleKeyPress(SpecialKeys.Enter)}>
            ENTER
          </button>
        </div>
        {alphaKeys[2].split('')
          .map(ch => <div style={styles.btnContainer_1}><button
            key={ch}
            style={btnStyle}
            onClick={_ => handleKeyPress(ch)}
          >
            {ch}
          </button>
          </div>
          )}
        <div style={styles.btnContainer_1}>
          <button style={btnStyle} onClick={_ => handleKeyPress(SpecialKeys.Backspace)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" /> <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>;
}

export default AlphabetOnlyKeypad;