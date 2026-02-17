import SUPER_ADMIN from "../models/superadmin.model";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === SUPER_ADMIN.email &&
    password === SUPER_ADMIN.password
  ) {
    return res.json({ role: "superadmin", message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});
