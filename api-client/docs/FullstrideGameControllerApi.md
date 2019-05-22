# LoopBackApplication.FullstrideGameControllerApi

All URIs are relative to *https://gjv-dev-fullstride-api.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fullstrideGameControllerCount**](FullstrideGameControllerApi.md#fullstrideGameControllerCount) | **GET** /fullstride-games/count | 
[**fullstrideGameControllerCreate**](FullstrideGameControllerApi.md#fullstrideGameControllerCreate) | **POST** /fullstride-games | 
[**fullstrideGameControllerDeleteById**](FullstrideGameControllerApi.md#fullstrideGameControllerDeleteById) | **DELETE** /fullstride-games/{id} | 
[**fullstrideGameControllerFind**](FullstrideGameControllerApi.md#fullstrideGameControllerFind) | **GET** /fullstride-games | 
[**fullstrideGameControllerFindById**](FullstrideGameControllerApi.md#fullstrideGameControllerFindById) | **GET** /fullstride-games/{id} | 
[**fullstrideGameControllerReplaceById**](FullstrideGameControllerApi.md#fullstrideGameControllerReplaceById) | **PUT** /fullstride-games/{id} | 
[**fullstrideGameControllerUpdateAll**](FullstrideGameControllerApi.md#fullstrideGameControllerUpdateAll) | **PATCH** /fullstride-games | 
[**fullstrideGameControllerUpdateById**](FullstrideGameControllerApi.md#fullstrideGameControllerUpdateById) | **PATCH** /fullstride-games/{id} | 



## fullstrideGameControllerCount

> InlineResponse200 fullstrideGameControllerCount(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.FullstrideGameControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.fullstrideGameControllerCount(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fullstrideGameControllerCreate

> FullstrideGame fullstrideGameControllerCreate(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.FullstrideGameControllerApi();
let opts = {
  'fullstrideGame': new LoopBackApplication.FullstrideGame() // FullstrideGame | 
};
apiInstance.fullstrideGameControllerCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullstrideGame** | [**FullstrideGame**](FullstrideGame.md)|  | [optional] 

### Return type

[**FullstrideGame**](FullstrideGame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullstrideGameControllerDeleteById

> fullstrideGameControllerDeleteById(id)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.FullstrideGameControllerApi();
let id = "id_example"; // String | 
apiInstance.fullstrideGameControllerDeleteById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## fullstrideGameControllerFind

> [FullstrideGame] fullstrideGameControllerFind(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.FullstrideGameControllerApi();
let opts = {
  'filter': null // Object | 
};
apiInstance.fullstrideGameControllerFind(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Object**](.md)|  | [optional] 

### Return type

[**[FullstrideGame]**](FullstrideGame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fullstrideGameControllerFindById

> FullstrideGame fullstrideGameControllerFindById(id)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.FullstrideGameControllerApi();
let id = "id_example"; // String | 
apiInstance.fullstrideGameControllerFindById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**FullstrideGame**](FullstrideGame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fullstrideGameControllerReplaceById

> fullstrideGameControllerReplaceById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.FullstrideGameControllerApi();
let id = "id_example"; // String | 
let opts = {
  'fullstrideGame': new LoopBackApplication.FullstrideGame() // FullstrideGame | 
};
apiInstance.fullstrideGameControllerReplaceById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fullstrideGame** | [**FullstrideGame**](FullstrideGame.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## fullstrideGameControllerUpdateAll

> InlineResponse200 fullstrideGameControllerUpdateAll(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.FullstrideGameControllerApi();
let opts = {
  'where': null, // Object | 
  'fullstrideGame': new LoopBackApplication.FullstrideGame() // FullstrideGame | 
};
apiInstance.fullstrideGameControllerUpdateAll(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **fullstrideGame** | [**FullstrideGame**](FullstrideGame.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullstrideGameControllerUpdateById

> fullstrideGameControllerUpdateById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.FullstrideGameControllerApi();
let id = "id_example"; // String | 
let opts = {
  'fullstrideGame': new LoopBackApplication.FullstrideGame() // FullstrideGame | 
};
apiInstance.fullstrideGameControllerUpdateById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fullstrideGame** | [**FullstrideGame**](FullstrideGame.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

