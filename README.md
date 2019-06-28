# gjv-dev-example

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)


To generate client side code run this command:

openapi-generator generate -i https://gjv-dev-example-api.herokuapp.com/openapi.json -g javascript -o /temp/client-fullstride-game-api --additional-properties useES6=true,usePromises=true