// https://www.codewars.com/kata/695688e9858d531c29a9d748/train/javascript
// object to track the attempts counter
// split the string 
// Parsing
// Strings
function detectBruteForce(logs) {
    // track consecutive failures per IP
    // 3+ in a row without success = suspicious
  const ips = {}
  const list = new Set()
  for(let entry of logs){
    const [address,res,user] = entry.split(/\s/);
    if(!(ips[address])){
      ips[address] = 0
    }
    if(res =='LOGIN_FAIL'){
      ips[address]++;
    }
    if(res =='LOGIN_SUCCESS'){
      ips[address] = 0
    }
    if(ips[address]==3){
      list.add(address)
    }
  }

  return Array.from(list).sort();
  }
