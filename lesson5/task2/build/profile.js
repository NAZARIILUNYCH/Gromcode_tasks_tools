(()=>{"use strict";(async function(t){const o=await fetch("https://api.github.com/users/github");if(!o.ok)throw new Error("Failed to get user data");return await o.json()})().then((({name:t,locati
// 