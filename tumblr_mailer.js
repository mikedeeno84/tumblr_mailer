//require block
var fs=require("fs");
var ejs=require("ejs");
var tumblr=require("tumblr.js");
var parseFuncs=require("./parseFuncs")
var email=require("./sendMail")
var myEmail="mikedeeno84@gmail.com";
var csvFile = fs.readFileSync("friend_listb.csv","utf8");
var emailTemplate = fs.readFileSync('email_template.js', 'utf8');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('IiXZjAq1hC3ZYjLQUe5d4w');

//tumbler authorization
var client = tumblr.createClient({
  consumer_key: 'eXxOt2ANdu1rv9mvqVOnrOwYs2IqeboD1Yv6E2cjZaot44DivM',
  consumer_secret: '2HNdRgPIi2TKKwhQz9GlBSMLXc1HA2Q35HsWt3tktbYR8a0sl5',
  token: 'oautkBJKFIirxBx6maCi5qC7Dv0mtSFpYbmcnCNbZLlap0kqGr',
  token_secret: '7Be1myPJSaC3ZhukVznCzGsvPcAkDrq0f8kVyo4nent63oS6VG'
});



friend_list=parseFuncs.csvParse(csvFile);
var blogURL="https://www.tumblr.com/blog/mikedeeno84"
var latest=[]
var emailArray=[]
function getPosts(callback){
	var rightNow=Math.floor(Date.now()/1000);
	var emailArray=[];
	client.posts('mikedeeno84.tumblr.com', function (err, data) {
		for (var i=0;i<data.posts.length;i++){
	     	if(rightNow-(data.posts[i].timestamp)<604800){		
	     	//rounds down milliseconds
	          latest.push(data.posts[i]);
	        }
	     }
	    for (var j=0;j<friend_list.length;j++){
			friend_list[j].latestPosts=latest;
			}
		
		

	 	//console.log(emailArray)	
		callback()
	});
}
function sendLatest(){
	for (var k=0; k<friend_list.length;k++){
	 		emailArray.push(ejs.render(emailTemplate,friend_list[k]));
	 	}
	 for (var i =0; i<friend_list.length; i++) {
	 	
	 	var current=friend_list[i];
	 	email.sendEmail(current.firstName, current["emailAddress\r"], "Mike", myEmail, "My Auto Email",emailArray[i])
	 };

}
getPosts(sendLatest);

 