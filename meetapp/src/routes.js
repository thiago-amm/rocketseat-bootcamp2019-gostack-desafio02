import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Thiago Alexandre Martins Monteiro',
    email: 'thicmp@gmail.com',
    password_hash: 'thiago123',
  });
  return res.json(user);
});

export default routes;
