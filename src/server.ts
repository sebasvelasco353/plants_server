import app from './app';
import config from './config/config';

app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`)
});
