import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserInfo } from '@/app/lib/firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userRecord = await getUserInfo('ExRGyTsnCIc5FRcoehjOotPEcj02');
  return res.status(200).json({ user: userRecord });
}
