interface State {
  mobile: boolean;
}

export const state = (): State =>
({
  mobile: false,
} as State);
