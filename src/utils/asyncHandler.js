// By using Promise:
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};

export { asyncHandler };

//or

// By using try-catch:
/*
const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        await requestHandler(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message,
        })
    }
};

export { asyncHandler };
*/

// Higher order functions:
// const asyncHandler = () => { };
// const asyncHandler = (func) => () => { };
// const asyncHandler = (func) => async () => { };