import { logger } from '../../../logger/logger';
import { DbService } from '../../../services/DbService';

export const getAllUserProjects = async (
  _source: any,
  { userId }: { userId: string }
) => {
  logger.debug(`userId: ${userId}`);
  return DbService.getAllUserProjects(userId as string);
};
