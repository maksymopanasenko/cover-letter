const ACCESS_TOKEN = 'your_secure_access_token';

function validateAccessToken(req) {
  const authHeader = req.headers.authorization;
  console.log("authHeader", authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }
  const token = authHeader.split(" ")[1];
  return token === ACCESS_TOKEN;
}

exports.webhookHandler = (req, res) => {
  if (!validateAccessToken(req)) {
    return res.status(401).json({ error: 'Invalid access token' });
  }

  res.status(200).json({ message: 'Webhook processed successfully' });
};
