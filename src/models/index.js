// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ORDERMATERIALS } = initSchema(schema);

export {
  ORDERMATERIALS
};