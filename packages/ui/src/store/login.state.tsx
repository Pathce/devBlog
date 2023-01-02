import { atom, selector } from "recoil";

interface loginForm {
  id: null | string,
  pw: null | string
}

const login = atom<loginForm>({
  key: 'login',
  default: {
    id: null,
    pw: null
  }
});

const loginSelector = selector({
  key: 'loginSelector',
  get: ({get}) => (get(login)),
  set: ({set}, payload) => {
    set(login, payload)
  }
});

const jsonWebToken = atom<null | string>({
  key: 'jsonWebToken',
  default: null
});

const refreshToken = atom<null | string>({
  key: 'refreshToken',
  default: null
});

const loginState = {
  loginInfo: loginSelector,
};

export default loginState;