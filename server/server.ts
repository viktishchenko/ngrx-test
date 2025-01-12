import * as express from 'express';
import { Application } from 'express';
import { loginUser } from './auth.route';
import { getAllCourses } from './get-courses.rout';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);

app.route('/api/courses').get(getAllCourses);

const httpServer: any = app.listen(3000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
