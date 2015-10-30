var tumblr=require("tumblr.js");
/* tumblr blog sender 
OAuth Consumer Key:
eXxOt2ANdu1rv9mvqVOnrOwYs2IqeboD1Yv6E2cjZaot44DivM
Secret Key:  2HNdRgPIi2TKKwhQz9GlBSMLXc1HA2Q35HsWt3tktbYR8a0sl5 

*/
var client = tumblr.createClient({
  consumer_key: 'eXxOt2ANdu1rv9mvqVOnrOwYs2IqeboD1Yv6E2cjZaot44DivM',
  consumer_secret: '2HNdRgPIi2TKKwhQz9GlBSMLXc1HA2Q35HsWt3tktbYR8a0sl5',
  token: 'oautkBJKFIirxBx6maCi5qC7Dv0mtSFpYbmcnCNbZLlap0kqGr',
  token_secret: '7Be1myPJSaC3ZhukVznCzGsvPcAkDrq0f8kVyo4nent63oS6VG'
});

client.posts('mikedeeno84.tumblr.com', function (err, data) {
		for (var i=0;i<data.posts.length;i++){
			console.log(i)
    		console.log(data.posts[i].body);
    	}
});