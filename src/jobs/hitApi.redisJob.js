import Queue from 'bull';
import models from '../mongoose';
import opts from '../lib/redisConnection';

const hitApiQueue = new Queue('last-login', opts);

hitApiQueue.process(async (job) => {
  try {
    const { apiUrl } = job.data;

    const result = await models.HitApi.findOneAndUpdate({ api: apiUrl }, {
      $inc: { count: 1 }
    });
    return Promise.resolve({ result });
  } catch (error) {
    Promise.reject(error);
  }
});

const hitApi = async (req, res, next) => {
  hitApiQueue.add({ apiUrl: req.originalUrl });

  next();
};

export default hitApi;
