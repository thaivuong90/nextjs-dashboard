import type { NextApiRequest, NextApiResponse } from 'next';
import { render } from '@react-email/render';
import MailTemplate from '../../app/ui/emails/template';
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
        MailTemplate({
          email: req.body.to,
          password: req.body.password,
        }),
      ),
    });

    return res
      .status(200)
      .json({
        to: req.body.to,
        subject: req.body.subject,
        password: req.body.password,
      });
  } else {
    return res.status(200).json({ message: 'not found' });
  }
}
