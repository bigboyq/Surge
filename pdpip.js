function onComplete(response,error) {
    if (response) {
      console.log('HttpClient:'+response.status);
     } else {
      console.log('HttpClient: Error');
     }
}
let mesg = $network.v4.primaryAddress + "_" + $network.v4.primaryInterface;
console.log("Network Changed!");
if ($network.v4.primaryAddress) {
	var resp=$httpClient.get("https://hk119.ensecure.info/"+mesg,onComplete);	
	console.log("LAN:"+mesg);
	}
$done();
