import app from '../server.js';

export default async (req, res) => {
    await app.handle(req, res);
};
