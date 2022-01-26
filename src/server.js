
const app = require("./app");

const listener = () => console.log(`Listening on Port ${process.env.PORT}!`);
app.listen(process.env.PORT, listener);