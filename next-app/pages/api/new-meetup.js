function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;
    
    res.status(200).json({});
  }
}
