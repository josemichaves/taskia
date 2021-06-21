import { logger } from '../../../logger/logger';
import { DbService } from '../../../services/DbService';

export const joinToExistingProject = async (
  _source: any,
  { shareCode, userId }: { shareCode: number; userId: string }
) => {
  logger.debug(`shareCode: ${shareCode}, userId: ${userId}`);
  return DbService.joinToAnExistingProject(shareCode, userId).then(
    () => {
      return {
        ok: true,
        err: '',
      };
    },
    (rej) => {
      logger.warn(rej);
      return {
        ok: false,
        err: 'There was an error joining to the project',
      };
    }
  );
};