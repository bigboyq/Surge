let mesg = $network.v4.primaryAddress + "_" + $network.v4.primaryInterface;
console.log(mesg);
$httpClient.get("https://hk119.ensecure.info/"+mesg);
$done();
