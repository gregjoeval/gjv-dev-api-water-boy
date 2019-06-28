import {inject} from '@loopback/context';
import {
  AuthenticationBindings,
  UserProfile,
  authenticate,
} from '@loopback/authentication';
import {get} from '@loopback/rest';


export class WhoAmIController {
  constructor(
    @inject(AuthenticationBindings.CURRENT_USER)
    private userProfile: UserProfile
  ) {}

  @authenticate('jwt')
  @get('/whoami')
  whoAmI(): string {
    return this.userProfile.id;
  }
}
