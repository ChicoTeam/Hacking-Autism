//var db = openDatabase('HackingAutism', '1.0', 'my first database', 2 * 1024 * 1024);

		var db;


	function setupDatabase() {
	  if (!window.openDatabase) {
	    echo('<div>Web SQL Database API is not available in this browser</div>');
	    return;
	  }
	  db = openDatabase('HackingAutism', '1.0', 'Emotions db', 2 * 1024 * 1024);
	  db.transaction(function (tx) {
	   // tx.executeSql('DROP TABLE IF EXISTS tweets');
	    tx.executeSql('CREATE TABLE IF NOT EXISTS Emotions (emotion_id unique, label TEXT)');
		tx.executeSql('CREATE TABLE IF NOT EXISTS Spectrums (spectrum_id unique, emotion_id1, emotion_id2  )');
		tx.executeSql('CREATE TABLE IF NOT EXISTS SpectrumLog (ID INTEGER PRIMARY KEY ASC, spectrum_id TEXT, mood_value FLOAT , added_on DATETIME)');

	  });

	}
	 setupDatabase();
