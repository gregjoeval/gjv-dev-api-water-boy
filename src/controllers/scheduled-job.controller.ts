import {get, param} from '@loopback/rest';
import {FullstrideGameService} from '../services/fullstride-game.service';
import {Count, CountSchema, repository} from '@loopback/repository';
import {ScheduledJobModel} from '../models/scheduled-job.model';
import {inject} from '@loopback/context';
import {TwilioServiceBindings} from '../keys';
import {TwilioService} from '../services/twilio.service';
import {FullstrideGameRepository} from '../repositories';

export class ScheduledJobController {
  cronJobs: Record<string, ScheduledJobModel>;
  constructor(
    @inject(TwilioServiceBindings.TWILIO_SERVICE)
    public twilioService: TwilioService,
    @repository(FullstrideGameRepository)
    public fullstrideGameRepository: FullstrideGameRepository
  ) {
    this.cronJobs = {
      [FullstrideGameService.name]: {
        name: FullstrideGameService.name,
        schedule: process.env.FULLSTRIDE_GAMES__JOB__SCHEDULE || '',
        job: () => FullstrideGameService.run(this.twilioService, this.fullstrideGameRepository)
      }
    }
  }

  @get('/scheduled-jobs/count', {
    responses: {
      '200': {
        description: 'ScheduledJobs count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(): Promise<Count> {
    const count = Object.keys(this.cronJobs).length;
    return Promise.resolve({count});
  }

  @get('/scheduled-jobs', {
    responses: {
      '200': {
        description: 'Scheduled Job instance',
        content: {'application/json': {schema: {'x-ts-type': ScheduledJobModel}}},
      },
    },
  })
  async getAll(): Promise<Record<string, ScheduledJobModel>> {
    return Promise.resolve(this.cronJobs);
  }

  @get('/scheduled-jobs/{id}', {
    responses: {
      '200': {
        description: 'Scheduled Job ran successfully',
        content: null,
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<(string|null)[]> {
    const scheduledJobModel = this.cronJobs[id];
    console.log(scheduledJobModel);
    if (scheduledJobModel && scheduledJobModel.job) {
      console.log(scheduledJobModel.job);
      const result = await scheduledJobModel.job();
      return Promise.resolve(result);
    }
    return Promise.reject([]);
  }
}
