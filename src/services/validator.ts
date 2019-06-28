// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Credentials} from '../repositories';
import {HttpErrors} from '@loopback/rest';

export function validateCredentials(credentials: Credentials) {
  // Validate Email // TODO: replace with validation for email
  if (!credentials.email) {
    throw new HttpErrors.UnprocessableEntity('invalid email');
  }

  // Validate Password Length
  if (credentials.password.length < 8) {
    throw new HttpErrors.UnprocessableEntity(
      'password must be minimum 8 characters',
    );
  }
}
