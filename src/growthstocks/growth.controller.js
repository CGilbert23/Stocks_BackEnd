const growthstocksService = require("./growth.service");

  
  function create(req, res, next) {
    growthstocksService
      .create(req.body)
      .then((data) => res.status(201).json(req.body))
      .catch(next);
  }
  
  function stockExists(req, res, next) {
    growthstocksService
      .read(req.params.stock_id)
      .then((stock) => {
        if (stock) {
          res.locals.stock = stock;
          return next();
        }
        next({ status: 404, message: `Product cannot be found.` });
      })
      .catch(next);
  }

  function update(req, res, next) {
    const updatedStock = {
      ...req.body,
      stock_id: res.locals.stock.stock_id,
    };
    growthstocksService
      .update(updatedStock)
      .then((data) => res.json({ data }))
      .catch(next);
  }

  function read(req, res) {
    const { stock: data } = res.locals;
    res.json({ data });
  }

  function destroy(req, res, next) {
    growthstocksService
      .delete(res.locals.stock.stock_id)
      .then(() => res.sendStatus(204))
      .catch(next);
  }


  /*list*/
function list(req, res, next) {
    growthstocksService
      .list()
      .then((data) => res.json({ data }))
      .catch(next);
  }

/*Sum*/
async function max(req, res) {
  res.json({ data: await growthstocksService.max()});
}


module.exports = {
  list,
  create: [create],
  read: [stockExists, read],
  update: [stockExists,update],
  delete: [stockExists, destroy],
  max:[max]
};