handlers.GetUsers = function (args) {
	var playerids = args.playerids;
	var playersData = [];
	for(var i = 0; i < playerids.length; i++)
	{
         playersData[i] = server.GetUserAccountInfo({PlayFabId: playerids[i]}).Data;
	}
	
	return playersData;
}