javascript
let body = JSON.parse($response.body);
body.data.remaintimes = 999;
body.data.isvip = true;
body.data.expiretime = "2099-12-31";
$done({body: JSON.stringify(body)});
