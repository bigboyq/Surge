let mesg = $network.v4.primaryAddress + "_" + $network.v4.primaryInterface;
console.log("Network Changed!");
if ($network.v4.primaryAddress) {
	$httpClient.get("https://hk119.ensecure.info/"+mesg);
	console.log("LAN:"+mesg);
	}
$done();
