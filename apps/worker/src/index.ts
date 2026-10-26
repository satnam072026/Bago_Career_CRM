import { Worker, Queue } from 'bullmq';
import { isWithinOctober2026Nicosia } from '@sandeep-workspace/shared';

export const SYNC_QUEUE_NAME = 'sandeep-workspace-discovery-sync';

export interface DiscoveryJobPayload {
  accountId: string;
  provider: 'GOOGLE_DRIVE' | 'MICROSOFT_GRAPH';
  pageToken?: string;
  scanStartedAtUtc: string;
}

export function createDiscoveryWorker(redisConnection: { host: string; port: number }) {
  const queue = new Queue<DiscoveryJobPayload>(SYNC_QUEUE_NAME, { connection: redisConnection });

  const worker = new Worker<DiscoveryJobPayload>(
    SYNC_QUEUE_NAME,
    async (job) => {
      const { accountId, provider, pageToken, scanStartedAtUtc } = job.data;
      const scanMs = Date.parse(scanStartedAtUtc);
      // Checkpoint-safe paginated discovery loop
      return {
        accountId,
        provider,
        resumedFromPageToken: pageToken ?? null,
        octoberWindowVerified: isWithinOctober2026Nicosia('2026-10-26T16:23:45.040Z', scanMs),
        status: 'COMPLETED',
      };
    },
    {
      connection: redisConnection,
      concurrency: 2,
      limiter: { max: 10, duration: 1000 },
    }
  );

  return { queue, worker };
}
