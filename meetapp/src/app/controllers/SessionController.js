import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    // 1. Verifica se o usuário já foi cadastrado.
    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado!' });
    }
    // 2. Verifica se a senha informada está correta.
    if (!(await user.checkPassword(password))) {
      return res
        .status(401)
        .json({ error: 'A senha informada está incorreta!' });
    }
    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      // Payload, Private Key
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
