import type { NextApiRequest, NextApiResponse } from 'next';
import { updateUser, createUser, getUser } from '@/app/lib/firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch(req.method) {
    case 'POST':
      const rsCreate = await createUser(req.body.user);
      return res.status(200).json({ message: rsCreate });
    case 'PUT':
      const rsUpdate = await updateUser(req.body.uid, req.body.user);
      return res.status(200).json({ message: rsUpdate });
    case 'GET':
      const userRecord = await getUser(req.body.uid);
      return res.status(200).json({ message: userRecord });
    default:
      return res.status(200).json({ message: req.method });
  }
}
