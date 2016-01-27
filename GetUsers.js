handlers.GetUsers = function (args) {
	var playerids = args.playerids;
	var playersData = [];
	for(var i = 0; i < playerids.length; i++)
	{               
		var data = {};
		data.PlayFabId = playerids[i];
		data.DisplayName = server.GetUserAccountInfo({PlayFabId: playerids[i]}).UserInfo.TitleInfo.DisplayName;
		if(!data.DisplayName)
			data.DisplayName = null;
        playersData[i] = data;
	}
	
	return playersData;
}