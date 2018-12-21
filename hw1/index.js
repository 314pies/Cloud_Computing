var apigClient = apigClientFactory.newClient({
    apiKey: 'NYAlEwnNdj7LFk4Gejp0ma454JIQ6zAp3NTPkbwX'
});

var params = {

};

var additionalParams = {
    //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here

};
    



	$("#submit").on("click",function(event){
		// event.preventDefault();
		var body = {
		"messages": [
			{
				"type": "string",
				"unstructured": {
				"id": "0",
				"text": $('#msg').val(),
				"timestamp": "10/14/2018"
					}
				}
			]
		};



apigClient.chatbotPost(params, body)
    .then(function(result){
    	console.log(result);
    	$("#res").append("<p>"+result["data"]["messages"][0]["unstructured"]["text"]+"</p>");
        //This is where you would put a success callback
    }).catch( function(result){
        //This is where you would put an error callback
        console.log("error happens somewhere");
        console.log(result);
    });
	});


