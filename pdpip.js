let mesg = $network.v4.primaryAddress + "_" + $network.v4.primaryInterface;

sleep(5000)
	.then(()=> $httpClient.get("https://hk119.ensecure.info/"+mesg));

$done();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

