export class ScheduledJobModel {
  name: string;
  schedule: string;
  job: () => Promise<(string|null)[]>;

  constructor(data?: Partial<ScheduledJobModel>) {
    const args = data || {};
    this.name = args.name || '';
    this.schedule = args.schedule || '';
    this.job = args.job || (() => Promise.resolve([]));
  }
}
