import AlphabetOnlyKeypad from "./keypads/AlphabetOnlyKeypad"
export type KeyPadType = 'ALPHABETIC_ONLY'

export enum SpecialKeys {
  Enter = 'Enter',
  Backspace = 'Backspace',
  Capslock = 'Capslock',
}

export type KeyPadProps = {
  onKeyPress?: (key: string | SpecialKeys) => void,
  colorMode?: 'light' | 'dark',
}

export { AlphabetOnlyKeypad }