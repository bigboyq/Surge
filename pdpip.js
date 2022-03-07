if (!$network.v4.primaryAddress) {
	console.log("Network Null");
	$done();
}
let mesg = $network.v4.primaryAddress + "_" + $network.v4.primaryInterface;
console.log("LAN:"+mesg);
$httpClient.get("https://hk119.ensecure.info/"+mesg);
$done();
