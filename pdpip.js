function onComplete(error, response, data) {
	if (error) {
      console.log('Error:'+error);
    }
	if (data) {
	  console.log('WAN:' + data.split('\n'));
	}
	$done();
}

let mesg = $network.v4.primaryAddress + "_" + $network.v4.primaryInterface;
console.log("Network Changed!");
if ($network.v4.primaryAddress) {
	var resp=$httpClient.get("https://hk119.ensecure.info/"+mesg,onComplete);
	console.log("LAN:"+mesg);
	}else{
	console.log("Null Network");
	$done();
	}
