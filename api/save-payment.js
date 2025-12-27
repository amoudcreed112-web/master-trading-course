let payments = []; // In-memory storage (resets occasionally on free tier)

export default function handler(req, res) {
  if (req.method === 'POST') {
    const payment = {
      email: req.body.email || 'no email',
      name: req.body.name || 'no name',
      amount: req.body.amount || 49.99,
      timestamp: new Date().toISOString()
    };
    payments.push(payment);
    console.log('New payment:', payment);
    res.status(200).json({ success: true, message: 'Saved!' });
  } else if (req.method === 'GET') {
    res.status(200).json({ payments });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
