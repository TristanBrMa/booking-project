const models = require("../models");

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [[user]] = await models.user.findByEmail(email);

    if (!user) {
      res.status(404).json({ error: "Utilisateur non trouvé" });
    } else {
      if (password === user.password) {
        res.json({ message: "Authentification réussie" });
      } else {
        res.status(401).json({ error: "Mot de passe incorrect" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signin };
