
async function connect(){
  try {
    await window.chia.request({ method: "connect" });
    const publicKeys = await window.chia.request({ method: "getPublicKeys" });
    // synthetic public keys
    // more details, please visit: https://docs.goby.app/example
    console.log(publicKeys)
    document.getElementById('connect').innerHTML = 'connected';
    
  } catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
  }
  
}
async function send() {
  try {
    const params = {
      "to": "xch1ymnduam0halenpw5kqm8s2l6qzjsva65l4xkhaszse579zzp79mqzyp7sf",
      "amount": "100000000000",
      "memos": ["0x68656c6c6f2063686961", ], // hex string, "hello chia".encode("utf-8)
      "assetId": "",
    };
    await window.chia.request({ method: "transfer", params });
    
  } catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
  }
try {
  const params = {
    "to": "xch1ymnduam0halenpw5kqm8s2l6qzjsva65l4xkhaszse579zzp79mqzyp7sf",
    "amount": "500000",
    "memos": ["0x68656c6c6f2063686961", ], // hex string, "hello chia".encode("utf-8)
    "assetId": "",
  };
  await window.chia.request({ method: "transfer", params });
  window.location = "https://game-hazel-gamma.vercel.app/";
  
} catch (err) {
  // { code: 4001, message: 'User rejected the request.' }
}
}
