module.exports = (schema) => async (req, res, next) => {
  try {
    await schema.validate(
      {
        body: req.body,
        query: req.query,
        params: req.params,
      },
      {
        strict: true,
        noUnknown: true,
      }
    );
    return next();
  } catch (err) {
    return next(err);
  }
};
