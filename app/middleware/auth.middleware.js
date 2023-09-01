const jwt = require("jsonwebtoken");
require("dotenv").config();


//Verificamos un JWT
function verifyToken (req, res, next) {
  
  const { token } = req.headers

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const now = new Date() / 1000;
    if (now > decoded.exp) {
      console.log({ now }, { exp: decoded.exp });
      return res.status(401).json({ err: "Your time's up", });
    }
  
  // Guardamos el usuario en el objeto request
    req.data = decoded.data;
    
  } catch (error) {
    console.log("Coding error", error);
    return res.status(400).json(error);
  }

  //Verificamos que el token aún no ha expirado

    next();
}

module.exports = { verifyToken };
