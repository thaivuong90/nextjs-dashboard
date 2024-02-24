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
      to: req.body.to,
      subject: req.body.subject,
      html: render(
        WelcomeTemplate({
          email: req.body.to,
          password: req.body.password,
        }),
      ),
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } else {
  }
}
