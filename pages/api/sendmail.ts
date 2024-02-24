import type { NextApiRequest, NextApiResponse } from 'next';
import { render } from '@react-email/render';
import WelcomeTemplate from '../../app/ui/emails/WelcomeTemplate';
import { sendEmail } from '../../app/lib/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    await sendEmail({
      to: 'thaivuong1503@gmail.com',
      subject: 'test send POST',
      html: render(
        WelcomeTemplate({
          email: 'thaivuong1503@gmail.com',
          password: 'abc123',
        }),
      ),
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } else {
    await sendEmail({
      to: 'thaivuong1503@gmail.com',
      subject: 'test send GET',
      html: render(
        WelcomeTemplate({
          email: 'thaivuong1503@gmail.com',
          password: 'abc123',
        }),
      ),
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  }
}
