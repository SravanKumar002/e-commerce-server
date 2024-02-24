import { mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbconnectionprops = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const Connectdb = async () => {
  mongoose.connect("mongodb://localhost:27017", dbconnectionprops);
};
export default Connectdb;
