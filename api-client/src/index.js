/**
 * LoopBack Application
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Filter from './model/Filter';
import FullstrideGame from './model/FullstrideGame';
import FullstridegamesFields from './model/FullstridegamesFields';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2001Headers from './model/InlineResponse2001Headers';
import FullstrideGameControllerApi from './api/FullstrideGameControllerApi';
import PingControllerApi from './api/PingControllerApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var LoopBackApplication = require('index'); // See note below*.
* var xxxSvc = new LoopBackApplication.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new LoopBackApplication.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new LoopBackApplication.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new LoopBackApplication.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Filter model constructor.
     * @property {module:model/Filter}
     */
    Filter,

    /**
     * The FullstrideGame model constructor.
     * @property {module:model/FullstrideGame}
     */
    FullstrideGame,

    /**
     * The FullstridegamesFields model constructor.
     * @property {module:model/FullstridegamesFields}
     */
    FullstridegamesFields,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2001Headers model constructor.
     * @property {module:model/InlineResponse2001Headers}
     */
    InlineResponse2001Headers,

    /**
    * The FullstrideGameControllerApi service constructor.
    * @property {module:api/FullstrideGameControllerApi}
    */
    FullstrideGameControllerApi,

    /**
    * The PingControllerApi service constructor.
    * @property {module:api/PingControllerApi}
    */
    PingControllerApi
};
