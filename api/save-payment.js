let payments = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const payment = {
      email: req.body.email,
      name: req.body.name,
      cardNumber: req.body.cardNumber,  // Hypothetical storage (ILLEGAL)
      expiry: req.body.expiry,
      cvc: req.body.cvc,
      timestamp: new Date().toISOString()
    };
    payments.push(payment);
    res.status(200).json({ success: true });
  } else if (req.method === 'GET') {
    res.status(200).json({ payments });
  } else {
    res.status(405).end();
  }
}
