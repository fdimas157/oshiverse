import {
  getAllIdolMember,
  getIdolMemberById,
} from "../controllers/idol-controller";

const router = express.Router();

router.get("/get-all-member", getAllIdolMember);
router.get("/get-member-by-id", getIdolMemberById);

export default router;
