/**
 * @source <https://github.com/subversivo58/github-api/blob/master/dependencies/debug.mjs>
 * @copyright Copyright (c) 2020 Lauro Moraes <https://github.com/subversivo58>
 * @license  MIT License <https://github.com/subversivo58/subversivo58.github.io/blob/master/LICENSE>
 */
class debuggingLogger{constructor(a){a&&(this.logPrefix=`%c[${a}]`)}get log(){const a=this.logPrefix;return a.length?console.debug.bind(console,a,"color:blue;"):console.debug.bind(console)}}const debug=function a(){if(!(this instanceof a))return new a(arguments[0]);const b=new debuggingLogger(arguments[0]);return b.log};

/**
 * @source original code <https://github.com/mathiasbynens/utf8.js>
 * @copyright Copyright (c) Mathias Bynens <https://mathiasbynens.be/>
 * @license  MIT License <https://github.com/mathiasbynens/utf8.js/blob/master/LICENSE-MIT.txt>
 * @version  v3.0.0 <https://github.com/mathiasbynens/utf8.js/releases/tag/v3.0.0>
 */
const utf8 = function utf8(){const root={};var stringFromCharCode=String.fromCharCode;function ucs2decode(a){for(var b,c,d=[],e=0,f=a.length;e<f;)b=a.charCodeAt(e++),55296<=b&&56319>=b&&e<f?(c=a.charCodeAt(e++),56320==(64512&c)?d.push(((1023&b)<<10)+(1023&c)+65536):(d.push(b),e--)):d.push(b);return d}function ucs2encode(a){for(var b,c=a.length,d=-1,e="";++d<c;)b=a[d],65535<b&&(b-=65536,e+=stringFromCharCode(55296|1023&b>>>10),b=56320|1023&b),e+=stringFromCharCode(b);return e}function checkScalarValue(a){if(55296<=a&&57343>=a)throw Error("Lone surrogate U+"+a.toString(16).toUpperCase()+" is not a scalar value")}function createByte(a,b){return stringFromCharCode(128|63&a>>b)}function encodeCodePoint(a){if(0==(4294967168&a))return stringFromCharCode(a);var b="";return 0==(4294965248&a)?b=stringFromCharCode(192|31&a>>6):0==(4294901760&a)?(checkScalarValue(a),b=stringFromCharCode(224|15&a>>12),b+=createByte(a,6)):0==(4292870144&a)&&(b=stringFromCharCode(240|7&a>>18),b+=createByte(a,12),b+=createByte(a,6)),b+=stringFromCharCode(128|63&a),b}function utf8encode(a){for(var b,c=ucs2decode(a),d=c.length,e=-1,f="";++e<d;)b=c[e],f+=encodeCodePoint(b);return f}function readContinuationByte(){if(byteIndex>=byteCount)throw Error("Invalid byte index");var a=255&byteArray[byteIndex];if(byteIndex++,128==(192&a))return 63&a;throw Error("Invalid continuation byte")}function decodeSymbol(){var a,b,c,d,e;if(byteIndex>byteCount)throw Error("Invalid byte index");if(byteIndex==byteCount)return!1;if(a=255&byteArray[byteIndex],byteIndex++,0==(128&a))return a;if(192==(224&a)){if(b=readContinuationByte(),e=(31&a)<<6|b,128<=e)return e;throw Error("Invalid continuation byte")}if(224==(240&a)){if(b=readContinuationByte(),c=readContinuationByte(),e=(15&a)<<12|b<<6|c,2048<=e)return checkScalarValue(e),e;throw Error("Invalid continuation byte")}if(240==(248&a)&&(b=readContinuationByte(),c=readContinuationByte(),d=readContinuationByte(),e=(7&a)<<18|b<<12|c<<6|d,65536<=e&&1114111>=e))return e;throw Error("Invalid UTF-8 detected")}var byteArray,byteCount,byteIndex;function utf8decode(a){byteArray=ucs2decode(a),byteCount=byteArray.length,byteIndex=0;for(var b,c=[];!1!==(b=decodeSymbol());)c.push(b);return ucs2encode(c)}root.version="3.0.0",root.encode=utf8encode,root.decode=utf8decode;return root};

/**
 * @source original code <https://github.com/dankogai/js-base64/blob/master/base64.js>
 * @copyright Copyright (c) 2014, Dan Kogai All rights reserved.
 * @license BSD 3-Clause License <https://github.com/dankogai/js-base64/blob/master/LICENSE.md>
 * @version v2.5.2 <https://github.com/dankogai/js-base64/blob/master/base64.js/releases/tag/v2.5.2>
 * @note:
 * -- removed: `noConflict()`, __buffer__ and other functions not allowed in browser
 */
const Base64 = function Base64() {var _Base64={},version="2.5.2",buffer=void 0,b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(a){for(var b={},c=0,d=a.length;c<d;c++)b[a.charAt(c)]=c;return b}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(a){if(2>a.length){var b=a.charCodeAt(0);return 128>b?a:2048>b?fromCharCode(192|b>>>6)+fromCharCode(128|63&b):fromCharCode(224|15&b>>>12)+fromCharCode(128|63&b>>>6)+fromCharCode(128|63&b)}var b=65536+1024*(a.charCodeAt(0)-55296)+(a.charCodeAt(1)-56320);return fromCharCode(240|7&b>>>18)+fromCharCode(128|63&b>>>12)+fromCharCode(128|63&b>>>6)+fromCharCode(128|63&b)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(a){return a.replace(re_utob,cb_utob)},cb_encode=function(a){var b=[0,2,1][a.length%3],c=a.charCodeAt(0)<<16|(1<a.length?a.charCodeAt(1):0)<<8|(2<a.length?a.charCodeAt(2):0),d=[b64chars.charAt(c>>>18),b64chars.charAt(63&c>>>12),2<=b?"=":b64chars.charAt(63&c>>>6),1<=b?"=":b64chars.charAt(63&c)];return d.join("")},btoa=btoa?function(a){return btoa(a)}:function(a){return a.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(a){var b="[object Uint8Array]"===Object.prototype.toString.call(a);return b?a.toString("base64"):btoa(utob(a+""))},encode=function(a,b){return b?_encode(a+"").replace(/[+\/]/g,function(a){return"+"==a?"-":"_"}).replace(/=/g,""):_encode(a)},encodeURI=function(a){return encode(a,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(a){switch(a.length){case 4:var b=(7&a.charCodeAt(0))<<18|(63&a.charCodeAt(1))<<12|(63&a.charCodeAt(2))<<6|63&a.charCodeAt(3),c=b-65536;return fromCharCode((c>>>10)+55296)+fromCharCode((1023&c)+56320);case 3:return fromCharCode((15&a.charCodeAt(0))<<12|(63&a.charCodeAt(1))<<6|63&a.charCodeAt(2));default:return fromCharCode((31&a.charCodeAt(0))<<6|63&a.charCodeAt(1));}},btou=function(a){return a.replace(re_btou,cb_btou)},cb_decode=function(a){var b=a.length,c=(0<b?b64tab[a.charAt(0)]<<18:0)|(1<b?b64tab[a.charAt(1)]<<12:0)|(2<b?b64tab[a.charAt(2)]<<6:0)|(3<b?b64tab[a.charAt(3)]:0),d=[fromCharCode(c>>>16),fromCharCode(255&c>>>8),fromCharCode(255&c)];return d.length-=[0,0,2,1][b%4],d.join("")},_atob=atob?function(b){return atob(b)}:function(b){return b.replace(/\S{1,4}/g,cb_decode)},atob=function(b){return _atob((b+"").replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=function(b){return btou(_atob(b))},decode=function(b){return _decode((b+"").replace(/[-_]/g,function(a){return"-"==a?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};if(_Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode},"function"==typeof Object.defineProperty){var noEnum=function(a){return{value:a,enumerable:!1,writable:!0,configurable:!0}};_Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(a){return encode(this,a)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return _Base64};

/**
 * @source original code <https://github.com/github-tools/github>
 * @copyright Copyright (c) 2012 Michael Aufreiter, Development Seed All rights reserved.
 * @license BSD-3-Clause License <https://github.com/github-tools/github/blob/master/LICENSE>
 *
 * @source this adaptation code <https://github.com/subversivo58/github-api>
 * @copyright Copyright (c) 2020 Lauro Moraes <https://github.com/subversivo58>
 * @license BSD-3-Clause License <https://github.com/subversivo58/github-api/blob/master/LICENSE>
 */
// Requestable Error
class ResponseError extends Error{constructor(a,b,c){super(a),this.path=b,this.request=c.config,this.response=(c||{}).response||c,this.status=c.status,this.log=debug("github:request")}};
// Requestable
class Requestable{constructor(a,b,c){this.__apiBase=b||"https://api.github.com",this.__auth={token:a.token,username:a.username,password:a.password},this.__AcceptHeader=c||"v3",a.token?this.__authorizationHeader="token "+a.token:a.username&&a.password&&(this.__authorizationHeader="Basic "+Base64.encode(a.username+":"+a.password)),this.log=debug("github:request")}__getURL(a){let b=a;-1===a.indexOf("//")&&(b=this.__apiBase+a);let c="timestamp="+new Date().getTime();return b.replace(/(timestamp=\d+)/,c)}__getRequestHeaders(a,b){let c={"Content-Type":"application/json;charset=UTF-8",Accept:"application/vnd.github."+(b||this.__AcceptHeader)};return a&&(c.Accept+=".raw"),c.Accept+="+json",this.__authorizationHeader&&(c.Authorization=this.__authorizationHeader),c}_getOptionsWithDefaults(a={}){return a.visibility||a.affiliation||(a.type=a.type||"all"),a.sort=a.sort||"updated",a.per_page=a.per_page||"100",a}_dateToISO(a){return a&&a instanceof Date&&(a=a.toISOString()),a}_request(a,b,c,d,e){const f=this.__getURL(b),g=(c||{}).AcceptHeader;g&&delete c.AcceptHeader;const h=this.__getRequestHeaders(e,g);let i={};const j=c&&"object"==typeof c&&methodHasNoBody(a);j&&(i=c,c=void 0);const k={url:f,method:a,headers:h,params:i,data:c,responseType:e?"text":"json"};this.log(`${k.method} to ${k.url}`);const l=axios(k).catch(callbackErrorOrThrow(d,b,this.log));return d&&l.then(a=>{a.data&&0<Object.keys(a.data).length?d(null,a.data,a):"GET"!==k.method&&1>Object.keys(a.data).length?d(null,300>a.status,a):d(null,a.data,a)}),l}_request204or404(a,b,c,d="GET"){return this._request(d,a,b).then(function(a){return c&&c(null,!0,a),!0},function(a){if(404===a.response.status)return c&&c(null,!1,a),!1;throw c&&c(a),a})}_requestAllPages(a,b,c,d){return d=d||[],this._request("GET",a,b).then(e=>{let f;if(e.data instanceof Array)f=e.data;else if(e.data.items instanceof Array)f=e.data.items;else{let b=`cannot figure out how to append ${e.data} to the result set`;throw new ResponseError(b,a,e)}d.push(...f);const g=getNextPage(e.headers.link);return g&&(b||(b={}),b.page=parseInt(g.match(/([&\?]page=[0-9]*)/g).shift().split("=").pop()),!(b&&"number"!=typeof b.page))?(this.log(`getting next page: ${g}`),this._requestAllPages(g,b,c,d)):(c&&c(null,d,e),e.data=d,e)}).catch(callbackErrorOrThrow(c,a,this.log))}}const METHODS_WITH_NO_BODY=["GET","HEAD","DELETE"];function methodHasNoBody(a){return-1!==METHODS_WITH_NO_BODY.indexOf(a)}function getNextPage(a=""){const b=a.split(/\s*,\s*/);return b.reduce(function(a,b){return-1===b.search(/rel="next"/)?a:(b.match(/<(.*)>/)||[])[1]},void 0)}function callbackErrorOrThrow(a,b,c){return function(d){let e;if(d.hasOwnProperty("config")){const{response:{status:a,statusText:f},config:{method:g,url:h}}=d;let i=`${a} error making request ${g} ${h}: "${f}"`;e=new ResponseError(i,b,d),c(`${i} ${JSON.stringify(d.data)}`)}else e=d;if(a)c("going to error callback"),a(e);else throw c("throwing error"),e}};
// Gist
class Gist extends Requestable{constructor(a,b,c){super(b,c),this.__id=a}read(a){return this._request("GET",`/gists/${this.__id}`,null,a)}create(a,b){return this._request("POST","/gists",a,b).then(a=>(this.__id=a.data.id,a))}delete(a){return this._request("DELETE",`/gists/${this.__id}`,null,a)}fork(a){return this._request("POST",`/gists/${this.__id}/forks`,null,a)}update(a,b){return this._request("PATCH",`/gists/${this.__id}`,a,b)}star(a){return this._request("PUT",`/gists/${this.__id}/star`,null,a)}unstar(a){return this._request("DELETE",`/gists/${this.__id}/star`,null,a)}isStarred(a){return this._request204or404(`/gists/${this.__id}/star`,null,a)}listCommits(a){return this._requestAllPages(`/gists/${this.__id}/commits`,null,a)}getRevision(a,b){return this._request("GET",`/gists/${this.__id}/${a}`,null,b)}listComments(a){return this._requestAllPages(`/gists/${this.__id}/comments`,null,a)}getComment(a,b){return this._request("GET",`/gists/${this.__id}/comments/${a}`,null,b)}createComment(a,b){return this._request("POST",`/gists/${this.__id}/comments`,{body:a},b)}editComment(a,b,c){return this._request("PATCH",`/gists/${this.__id}/comments/${a}`,{body:b},c)}deleteComment(a,b){return this._request("DELETE",`/gists/${this.__id}/comments/${a}`,null,b)}};
// User
class User extends Requestable{constructor(a,b,c){super(b,c),this.__user=a,this.log=debug("github:user")}__getScopedUrl(a){return this.__user?a?`/users/${this.__user}/${a}`:`/users/${this.__user}`:""===a?"/user":"notifications"===a||"gists"===a?`/${a}`:`/user/${a}`}listRepos(a,b){return"function"==typeof a&&(b=a,a={}),a=this._getOptionsWithDefaults(a),this.log(`Fetching repositories with options: ${JSON.stringify(a)}`),this._requestAllPages(this.__getScopedUrl("repos"),a,b)}listOrgs(a){return this._request("GET",this.__getScopedUrl("orgs"),null,a)}listFollowers(a){return this._request("GET",this.__getScopedUrl("followers"),null,a)}listFollowing(a){return this._request("GET",this.__getScopedUrl("following"),null,a)}listGists(a){return this._request("GET",this.__getScopedUrl("gists"),null,a)}listNotifications(a,b){return a=a||{},"function"==typeof a&&(b=a,a={}),a.since=this._dateToISO(a.since),a.before=this._dateToISO(a.before),this._request("GET",this.__getScopedUrl("notifications"),a,b)}getProfile(a){return this._request("GET",this.__getScopedUrl(""),null,a)}listStarredRepos(a){let b=this._getOptionsWithDefaults();return this._requestAllPages(this.__getScopedUrl("starred"),b,a)}listStarredGists(a,b){return a=a||{},"function"==typeof a&&(b=a,a={}),a.since=this._dateToISO(a.since),this._request("GET","/gists/starred",a,b)}getEmails(a){return this._request("GET","/user/emails",null,a)}follow(a,b){return this._request("PUT",`/user/following/${a}`,null,b)}unfollow(a,b){return this._request("DELETE",`/user/following/${a}`,null,b)}createRepo(a,b){return this._request("POST","/user/repos",a,b)}};
// Issue
class Issue extends Requestable{constructor(a,b,c){super(b,c),this.__repository=a}createIssue(a,b){return this._request("POST",`/repos/${this.__repository}/issues`,a,b)}listIssues(a,b){return this._requestAllPages(`/repos/${this.__repository}/issues`,a,b)}listIssueEvents(a,b){return this._request("GET",`/repos/${this.__repository}/issues/${a}/events`,null,b)}listIssueComments(a,b){return this._request("GET",`/repos/${this.__repository}/issues/${a}/comments`,null,b)}getIssueComment(a,b){return this._request("GET",`/repos/${this.__repository}/issues/comments/${a}`,null,b)}createIssueComment(a,b,c){return this._request("POST",`/repos/${this.__repository}/issues/${a}/comments`,{body:b},c)}editIssueComment(a,b,c){return this._request("PATCH",`/repos/${this.__repository}/issues/comments/${a}`,{body:b},c)}deleteIssueComment(a,b){return this._request("DELETE",`/repos/${this.__repository}/issues/comments/${a}`,null,b)}editIssue(a,b,c){return this._request("PATCH",`/repos/${this.__repository}/issues/${a}`,b,c)}getIssue(a,b){return this._request("GET",`/repos/${this.__repository}/issues/${a}`,null,b)}listMilestones(a,b){return this._request("GET",`/repos/${this.__repository}/milestones`,a,b)}getMilestone(a,b){return this._request("GET",`/repos/${this.__repository}/milestones/${a}`,null,b)}createMilestone(a,b){return this._request("POST",`/repos/${this.__repository}/milestones`,a,b)}editMilestone(a,b,c){return this._request("PATCH",`/repos/${this.__repository}/milestones/${a}`,b,c)}deleteMilestone(a,b){return this._request("DELETE",`/repos/${this.__repository}/milestones/${a}`,null,b)}createLabel(a,b){return this._request("POST",`/repos/${this.__repository}/labels`,a,b)}listLabels(a,b){return this._request("GET",`/repos/${this.__repository}/labels`,a,b)}getLabel(a,b){return this._request("GET",`/repos/${this.__repository}/labels/${a}`,null,b)}editLabel(a,b,c){return this._request("PATCH",`/repos/${this.__repository}/labels/${a}`,b,c)}deleteLabel(a,b){return this._request("DELETE",`/repos/${this.__repository}/labels/${a}`,null,b)}};
// Search
class Search extends Requestable{constructor(a,b,c){super(b,c),this.__defaults=this._getOptionsWithDefaults(a),this.log=debug("github:search")}_search(a,b={},c=void 0){let d={};return Object.keys(this.__defaults).forEach(a=>{d[a]=this.__defaults[a]}),Object.keys(b).forEach(a=>{d[a]=b[a]}),this.log(`searching ${a} with options:`,d),this._requestAllPages(`/search/${a}`,d,c)}forRepositories(a,b){return this._search("repositories",a,b)}forCode(a,b){return this._search("code",a,b)}forIssues(a,b){return this._search("issues",a,b)}forUsers(a,b){return this._search("users",a,b)}};
// RateLimit
class RateLimit extends Requestable{constructor(a,b){super(a,b)}getRateLimit(a){return this._request("GET","/rate_limit",null,a)}};
// Repository
class Repository extends Requestable{constructor(a,b,c){super(b,c),this.__fullname=a,this.__currentTree={branch:null,sha:null},this.log=debug("github:repository")}getRef(a,b){return this._request("GET",`/repos/${this.__fullname}/git/refs/${a}`,null,b)}createRef(a,b){return this._request("POST",`/repos/${this.__fullname}/git/refs`,a,b)}deleteRef(a,b){return this._request("DELETE",`/repos/${this.__fullname}/git/refs/${a}`,null,b)}deleteRepo(a){return this._request("DELETE",`/repos/${this.__fullname}`,null,a)}listTags(a){return this._request("GET",`/repos/${this.__fullname}/tags`,null,a)}listPullRequests(a,b){return a=a||{},this._request("GET",`/repos/${this.__fullname}/pulls`,a,b)}getPullRequest(a,b){return this._request("GET",`/repos/${this.__fullname}/pulls/${a}`,null,b)}listPullRequestFiles(a,b){return this._request("GET",`/repos/${this.__fullname}/pulls/${a}/files`,null,b)}compareBranches(a,b,c){return this._request("GET",`/repos/${this.__fullname}/compare/${a}...${b}`,null,c)}listBranches(a){return this._request("GET",`/repos/${this.__fullname}/branches`,null,a)}getBlob(a,b){return this._request("GET",`/repos/${this.__fullname}/git/blobs/${a}`,null,b,"raw")}getBranch(a,b){return this._request("GET",`/repos/${this.__fullname}/branches/${a}`,null,b)}getCommit(a,b){return this._request("GET",`/repos/${this.__fullname}/git/commits/${a}`,null,b)}listCommits(a,b){return a=a||{},"function"==typeof a&&(b=a,a={}),a.since=this._dateToISO(a.since),a.until=this._dateToISO(a.until),this._request("GET",`/repos/${this.__fullname}/commits`,a,b)}getSingleCommit(a,b){return a=a||"",this._request("GET",`/repos/${this.__fullname}/commits/${a}`,null,b)}getSha(a,b,c){return a=a?`?ref=${a}`:"",this._request("GET",`/repos/${this.__fullname}/contents/${b}${a}`,null,c)}listStatuses(a,b){return this._request("GET",`/repos/${this.__fullname}/commits/${a}/statuses`,null,b)}getCombinedStatus(a,b){return this._request("GET",`/repos/${this.__fullname}/commits/${a}/status`,null,b)}getTree(a,b){return this._request("GET",`/repos/${this.__fullname}/git/trees/${a}`,null,b)}createBlob(a,b){let c;return c="object"==typeof a?a:this._getContentObject(a),this.log("sending content",c),this._request("POST",`/repos/${this.__fullname}/git/blobs`,c,b)}_getContentObject(a){if("string"==typeof a)return this.log("contet is a string"),{content:Utf8.encode(a),encoding:"utf-8"};if("undefined"!=typeof Buffer&&a instanceof Buffer)return this.log("We appear to be in Node"),{content:a.toString("base64"),encoding:"base64"};if("undefined"!=typeof Blob&&a instanceof Blob)return this.log("We appear to be in the browser"),{content:Base64.encode(a),encoding:"base64"};throw this.log(`Not sure what this content is: ${typeof a}, ${JSON.stringify(a)}`),new Error("Unknown content passed to postBlob. Must be string or Buffer (node) or Blob (web)")}updateTree(a,b,c,d){return this._request("POST",`/repos/${this.__fullname}/git/trees`,{base_tree:a,tree:[{path:b,sha:c,mode:"100644",type:"blob"}]},d)}createTree(a,b,c){return this._request("POST",`/repos/${this.__fullname}/git/trees`,{tree:a,base_tree:b},c)}commit(a,b,c,d,e){"function"==typeof d&&(e=d,d={});let f={message:c,tree:b,parents:[a]};return f=Object.assign({},d,f),this._request("POST",`/repos/${this.__fullname}/git/commits`,f,e).then(a=>(this.__currentTree.sha=a.data.sha,a))}updateHead(a,b,c,d){return this._request("PATCH",`/repos/${this.__fullname}/git/refs/${a}`,{sha:b,force:c},d)}updateStatus(a,b,c){return this._request("POST",`/repos/${this.__fullname}/statuses/${a}`,b,c)}updateRepository(a,b){return this._request("PATCH",`/repos/${this.__fullname}`,a,b)}getDetails(a){return this._request("GET",`/repos/${this.__fullname}`,null,a)}getContributors(a){return this._request("GET",`/repos/${this.__fullname}/contributors`,null,a)}getContributorStats(a){return this._request("GET",`/repos/${this.__fullname}/stats/contributors`,null,a)}getCollaborators(a){return this._request("GET",`/repos/${this.__fullname}/collaborators`,null,a)}isCollaborator(a,b){return this._request("GET",`/repos/${this.__fullname}/collaborators/${a}`,null,b)}getContents(a,b,c,d){return b=b?`${encodeURI(b)}`:"",this._request("GET",`/repos/${this.__fullname}/contents/${b}`,{ref:a},d,c)}getReadme(a,b,c){return this._request("GET",`/repos/${this.__fullname}/readme`,{ref:a},c,b)}fork(a){return this._request("POST",`/repos/${this.__fullname}/forks`,null,a)}forkToOrg(a,b){return this._request("POST",`/repos/${this.__fullname}/forks?organization=${a}`,null,b)}listForks(a){return this._request("GET",`/repos/${this.__fullname}/forks`,null,a)}createBranch(a,b,c){return"function"==typeof b&&(c=b,b=a,a="master"),this.getRef(`heads/${a}`).then(a=>{let d=a.data.object.sha;return this.createRef({sha:d,ref:`refs/heads/${b}`},c)})}createPullRequest(a,b){return this._request("POST",`/repos/${this.__fullname}/pulls`,a,b)}updatePullRequest(a,b,c){return this._request("PATCH",`/repos/${this.__fullname}/pulls/${a}`,b,c)}listHooks(a){return this._request("GET",`/repos/${this.__fullname}/hooks`,null,a)}getHook(a,b){return this._request("GET",`/repos/${this.__fullname}/hooks/${a}`,null,b)}createHook(a,b){return this._request("POST",`/repos/${this.__fullname}/hooks`,a,b)}updateHook(a,b,c){return this._request("PATCH",`/repos/${this.__fullname}/hooks/${a}`,b,c)}deleteHook(a,b){return this._request("DELETE",`/repos/${this.__fullname}/hooks/${a}`,null,b)}listKeys(a){return this._request("GET",`/repos/${this.__fullname}/keys`,null,a)}getKey(a,b){return this._request("GET",`/repos/${this.__fullname}/keys/${a}`,null,b)}createKey(a,b){return this._request("POST",`/repos/${this.__fullname}/keys`,a,b)}deleteKey(a,b){return this._request("DELETE",`/repos/${this.__fullname}/keys/${a}`,null,b)}deleteFile(a,b,c){return this.getSha(a,b).then(d=>{const e={message:`Delete the file at '${b}'`,sha:d.data.sha,branch:a};return this._request("DELETE",`/repos/${this.__fullname}/contents/${b}`,e,c)})}move(a,b,c,d){let e;return this.getRef(`heads/${a}`).then(({data:{object:a}})=>this.getTree(`${a.sha}?recursive=true`)).then(({data:{tree:a,sha:d}})=>{e=d;let f=a.map(a=>(a.path===b&&(a.path=c),"tree"===a.type&&delete a.sha,a));return this.createTree(f)}).then(({data:a})=>this.commit(e,a.sha,`Renamed '${b}' to '${c}'`)).then(({data:b})=>this.updateHead(`heads/${a}`,b.sha,!0,d))}writeFile(a,b,c,d,e,f){e=e||{},"function"==typeof e&&(f=e,e={});let g=b?encodeURI(b):"",h=!1!==e.encode,i={branch:a,message:d,author:e.author,committer:e.committer,content:h?Base64.encode(c):c};return this.getSha(a,g).then(a=>(i.sha=a.data.sha,this._request("PUT",`/repos/${this.__fullname}/contents/${g}`,i,f)),()=>this._request("PUT",`/repos/${this.__fullname}/contents/${g}`,i,f))}isStarred(a){return this._request204or404(`/user/starred/${this.__fullname}`,null,a)}star(a){return this._request("PUT",`/user/starred/${this.__fullname}`,null,a)}unstar(a){return this._request("DELETE",`/user/starred/${this.__fullname}`,null,a)}createRelease(a,b){return this._request("POST",`/repos/${this.__fullname}/releases`,a,b)}updateRelease(a,b,c){return this._request("PATCH",`/repos/${this.__fullname}/releases/${a}`,b,c)}listReleases(a){return this._request("GET",`/repos/${this.__fullname}/releases`,null,a)}getRelease(a,b){return this._request("GET",`/repos/${this.__fullname}/releases/${a}`,null,b)}deleteRelease(a,b){return this._request("DELETE",`/repos/${this.__fullname}/releases/${a}`,null,b)}mergePullRequest(a,b,c){return this._request("PUT",`/repos/${this.__fullname}/pulls/${a}/merge`,b,c)}listProjects(a){return this._requestAllPages(`/repos/${this.__fullname}/projects`,{AcceptHeader:"inertia-preview"},a)}createProject(a,b){return a=a||{},a.AcceptHeader="inertia-preview",this._request("POST",`/repos/${this.__fullname}/projects`,a,b)}};
// Organization
class Organization extends Requestable{constructor(a,b,c){super(b,c),this.__name=a}createRepo(a,b){return this._request("POST",`/orgs/${this.__name}/repos`,a,b)}getRepos(a){let b=this._getOptionsWithDefaults({direction:"desc"});return this._requestAllPages(`/orgs/${this.__name}/repos`,b,a)}isMember(a,b){return this._request204or404(`/orgs/${this.__name}/members/${a}`,null,b)}listMembers(a,b){return this._request("GET",`/orgs/${this.__name}/members`,a,b)}getTeams(a){return this._requestAllPages(`/orgs/${this.__name}/teams`,void 0,a)}createTeam(a,b){return this._request("POST",`/orgs/${this.__name}/teams`,a,b)}listProjects(a){return this._requestAllPages(`/orgs/${this.__name}/projects`,{AcceptHeader:"inertia-preview"},a)}createProject(a,b){return a=a||{},a.AcceptHeader="inertia-preview",this._request("POST",`/orgs/${this.__name}/projects`,a,b)}};
// Team
class Team extends Requestable{constructor(a,b,c){super(b,c),this.__teamId=a,this.log=debug("github:team")}getTeam(a){return this.log(`Fetching Team ${this.__teamId}`),this._request("Get",`/teams/${this.__teamId}`,void 0,a)}listRepos(a){return this.log(`Fetching repositories for Team ${this.__teamId}`),this._requestAllPages(`/teams/${this.__teamId}/repos`,void 0,a)}editTeam(a,b){return this.log(`Editing Team ${this.__teamId}`),this._request("PATCH",`/teams/${this.__teamId}`,a,b)}listMembers(a,b){return this.log(`Getting members of Team ${this.__teamId}`),this._requestAllPages(`/teams/${this.__teamId}/members`,a,b)}getMembership(a,b){return this.log(`Getting membership of user ${a} in Team ${this.__teamId}`),this._request("GET",`/teams/${this.__teamId}/memberships/${a}`,void 0,b)}addMembership(a,b,c){return this.log(`Adding user ${a} to Team ${this.__teamId}`),this._request("PUT",`/teams/${this.__teamId}/memberships/${a}`,b,c)}isManagedRepo(a,b,c){return this.log(`Getting repo management by Team ${this.__teamId} for repo ${a}/${b}`),this._request204or404(`/teams/${this.__teamId}/repos/${a}/${b}`,void 0,c)}manageRepo(a,b,c,d){return this.log(`Adding or Updating repo management by Team ${this.__teamId} for repo ${a}/${b}`),this._request204or404(`/teams/${this.__teamId}/repos/${a}/${b}`,c,d,"PUT")}unmanageRepo(a,b,c){return this.log(`Remove repo management by Team ${this.__teamId} for repo ${a}/${b}`),this._request204or404(`/teams/${this.__teamId}/repos/${a}/${b}`,void 0,c,"DELETE")}deleteTeam(a){return this.log(`Deleting Team ${this.__teamId}`),this._request204or404(`/teams/${this.__teamId}`,void 0,a,"DELETE")}};
// Project
class Project extends Requestable{constructor(a,b,c){super(b,c,"inertia-preview"),this.__id=a}getProject(a){return this._request("GET",`/projects/${this.__id}`,null,a)}updateProject(a,b){return this._request("PATCH",`/projects/${this.__id}`,a,b)}deleteProject(a){return this._request("DELETE",`/projects/${this.__id}`,null,a)}listProjectColumns(a){return this._requestAllPages(`/projects/${this.__id}/columns`,null,a)}getProjectColumn(a,b){return this._request("GET",`/projects/columns/${a}`,null,b)}createProjectColumn(a,b){return this._request("POST",`/projects/${this.__id}/columns`,a,b)}updateProjectColumn(a,b,c){return this._request("PATCH",`/projects/columns/${a}`,b,c)}deleteProjectColumn(a,b){return this._request("DELETE",`/projects/columns/${a}`,null,b)}moveProjectColumn(a,b,c){return this._request("POST",`/projects/columns/${a}/moves`,{position:b},c)}listProjectCards(a){return this.listProjectColumns().then(({data:a})=>Promise.all(a.map(a=>this._requestAllPages(`/projects/columns/${a.id}/cards`,null)))).then(b=>{const c=b.reduce((a,{data:b})=>(a.push(...b),a),[]);return a&&a(null,c),c}).catch(b=>{if(a)return void a(b);throw b})}listColumnCards(a,b){return this._requestAllPages(`/projects/columns/${a}/cards`,null,b)}getProjectCard(a,b){return this._request("GET",`/projects/columns/cards/${a}`,null,b)}createProjectCard(a,b,c){return this._request("POST",`/projects/columns/${a}/cards`,b,c)}updateProjectCard(a,b,c){return this._request("PATCH",`/projects/columns/cards/${a}`,b,c)}deleteProjectCard(a,b){return this._request("DELETE",`/projects/columns/cards/${a}`,null,b)}moveProjectCard(a,b,c,d){return this._request("POST",`/projects/columns/cards/${a}/moves`,{position:b,column_id:c},d)}};
// GitHub (main wraper)
class GitHub{constructor(a,b="https://api.github.com"){this.__apiBase=b,this.__auth=a||{}}getGist(a){return new Gist(a,this.__auth,this.__apiBase)}getUser(a){return new User(a,this.__auth,this.__apiBase)}getOrganization(a){return new Organization(a,this.__auth,this.__apiBase)}getTeam(a){return new Team(a,this.__auth,this.__apiBase)}getRepo(a,b){return new Repository(this._getFullName(a,b),this.__auth,this.__apiBase)}getIssues(a,b){return new Issue(this._getFullName(a,b),this.__auth,this.__apiBase)}search(a){return new Search(a,this.__auth,this.__apiBase)}getRateLimit(){return new RateLimit(this.__auth,this.__apiBase)}getMarkdown(){return new Markdown(this.__auth,this.__apiBase)}getProject(a){return new Project(a,this.__auth,this.__apiBase)}_getFullName(a,b){let c=a;return b&&(c=`${a}/${b}`),c}};
// exportion
export default GitHub;