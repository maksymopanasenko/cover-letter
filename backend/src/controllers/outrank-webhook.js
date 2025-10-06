const ACCESS_TOKEN = 'your_secure_access_token';

function validateAccessToken(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }
  const token = authHeader.split(" ")[1];
  return token === ACCESS_TOKEN;
}

exports.webhookHandler = (req, res) => {
  console.log("Received webhook:", req.body);
  console.log("Headers:", req.headers);
  console.log("Query Params:", req.query);
  if (!validateAccessToken(req)) {
    return res.status(401).json({ error: 'Invalid access token' });
  }

  res.status(200).json({ message: 'Webhook processed successfully' });
};
