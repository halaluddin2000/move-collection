import mongoose from "mongoose";
import app from "./app";

async function main() {
  await mongoose.connect(
    "mongodb+srv://movie-callection:Um1ufPhkGefHjuof@cluster0.30d0b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const port = 5000;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
main();
