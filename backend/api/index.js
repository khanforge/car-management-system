import app from '../server.js';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req = VercelRequest, res = VercelResponse) => {
    return app(req, res);
};
