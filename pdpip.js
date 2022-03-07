let mesg = $network.v4.primaryAddress + "_" + $network.v4.primaryInterface;
if (await $network.v4.primaryAddress) {
	$httpClient.get("https://hk119.ensecure.info/"+mesg);
	console.log("LAN:"+mesg);
	}else{
	console.log("Network Null");
	}
$done();
