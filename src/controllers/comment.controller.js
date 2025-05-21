import mongoose from "mongoose";
import { comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asynHandler } from "../utils/asyncHandler.js";

const getVideoComments = asynHandler(async (req, res) => {
    // TODO: get all comments for a video
    const { videoId } = req.params;
    const { page = 1, limit = 10 } = req.query;
});

const addComment = asynHandler(async (req, res) => {
    // TODO: add a comment to a video
});

const updateComment = asynHandler(async (req, res) => {
    // TODO: update a comment
});

const deleteComment = asynHandler(async (req, res) => {
    // TODO: delete a comment
});

export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment,
};
