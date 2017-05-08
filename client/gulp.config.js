module.exports = function(){
	var client  ='../client/'
	var clientSrc = client + 'src/';
	var clientApp = clientSrc +'app/'
	var tmp  = client + 'tmp/'
	var config ={
		client     : client,
		clientSrc  : clientSrc,
		clientApp  : clientApp,
		scss       : clientSrc + 'styles/styles.scss',
		alljs      : [
		clientApp + '**/*.module.js', 
		clientApp +'**/*.js',
		clientApp +'**/*.router.js'],
		tmp        : tmp,
		css        : tmp +'styles.css',
		index      : clientSrc +'index.html',
		html       : clientSrc +'**/*.html',
		bower      : {
		json       : require('./bower.json'),
		directory  : "./libs/",
		ignorePath : ".."
		}
	};

	config.wiredep = function() {
		var options = {
			bowerJson : config.bower.json,
			directory : config.bower.directory,
			ignorePath : config.bower.ignorePath
		}
		return options
	}

	return config
};