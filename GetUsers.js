handlers.GetUsers = function (args) {
	var playerids = args.playerids;
	var playersData = [];
	for(var i = 0; i < playerids.length; i++)
	{               
		var data = {};
		data.PlayFabId = playerids[i];
		data.DisplayName = "test";//server.GetUserAccountInfo({PlayFabId: playerids[i]}).UserInfo.TitleInfo.DisplayName;
        playersData[i] = data;
	}
	
	return playersData;
}