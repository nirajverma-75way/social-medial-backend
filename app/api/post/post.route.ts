
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as PostController from "./post.controller";
import * as PostValidator from "./post.validation";
import { upload } from "../../common/middleware/multer.middleware";

const router = Router();

router
        .get("/", PostController.getAllPost)
        .get("/:id", PostController.getPostById)
        .delete("/:id", PostController.deletePost)
        .post("/",upload.single("mediaUrl"), PostValidator.createPost, catchError, PostController.createPost)
        .put("/:id", PostValidator.updatePost, catchError, PostController.updatePost)
        .patch("/:id", PostValidator.editPost, catchError, PostController.editPost)

export default router;

