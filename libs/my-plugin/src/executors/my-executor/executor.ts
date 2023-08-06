import { readJsonFile } from '@nx/devkit';
import { MyExecutorExecutorSchema } from './schema';

export default async function runExecutor(options: MyExecutorExecutorSchema) {
  console.log(readJsonFile('apps.json'));
  return {
    success: true,
  };
}
