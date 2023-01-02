import jwt from 'jsonwebtoken';
import crypto from 'crypto';

class JWTTokenUtil {
  constructor() {

  }
  
  createJWTToken = () => {
    
  }

  createKey = (password: string, sa ?: string): string => {
    let salt = "";
    let tokenKey = "";
    // salt 는 랜덤으로 생성되기 때문에 이후 검증시 salt값이 필요
    if (sa) salt = sa;
    else crypto.randomBytes(64, (err, buf) => salt = buf.toString('base64'));
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) => tokenKey = key.toString('base64'));
    return tokenKey;
  }
}

export default new JWTTokenUtil();