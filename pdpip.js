let mesg = $network.v4.primaryAddress + "_" + $network.v4.primaryInterface;
console.log("LAN:"+mesg);
console.log("WAN:"+$httpClient.get("https://hk119.ensecure.info/"+mesg));
$done();
