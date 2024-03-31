import "dotenv/config"
import { connect } from "mongoose"

async function dbConnect(): Promise<void>{
    const DB_URI = "mongodb://mongo:GJAvAspSerGjuyfdtflRBLXAeyworTYk@viaduct.proxy.rlwy.net:29572";
    await connect(DB_URI);
}

export default dbConnect();