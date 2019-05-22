# LoopBackApplication.PingControllerApi

All URIs are relative to *https://gjv-dev-fullstride-api.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingControllerPing**](PingControllerApi.md#pingControllerPing) | **GET** /ping | 



## pingControllerPing

> InlineResponse2001 pingControllerPing()



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.PingControllerApi();
apiInstance.pingControllerPing((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

