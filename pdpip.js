const delay = ms => new Promise(res => setTimeout(res, ms));
let mesg = $network.v4.primaryAddress + "_" + $network.v4.primaryInterface;
await delay(5000);
$httpClient.get("https://hk119.ensecure.info/"+mesg);
$done();
