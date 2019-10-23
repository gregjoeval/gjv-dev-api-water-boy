import * as twilio from 'twilio';

export interface ITwilioService {
  sendTextMessage: (opts: {message: string, to: string}) => void
}

export class TwilioService implements ITwilioService{
  private client: twilio.Twilio;
  private config: { accountSid?: string; authToken?: string; phoneNumber?: string};
  constructor() {
    this.config = {
      phoneNumber: process.env.TWILIO__PHONE_NUMBER,
      accountSid: process.env.TWILIO__ACCOUNT_SID,
      authToken: process.env.TWILIO__AUTH_TOKEN
    };
    this.client = twilio(this.config.accountSid, this.config.authToken)
  }

  sendTextMessage ({message, to}: {message: string, to: string}) {
    this.client.messages.create({
      body: message,
      to: to,
      from: this.config.phoneNumber
    })
  }
}