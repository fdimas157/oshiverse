import { getCurrentUSer } from "../controllers/current-user";

const router = express.Router();

router.get("/get-current-user", getCurrentUSer);

export default router;
