module.exports = function(grunt) {
	//carrega os módulos
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");

	//configura tasks
	grunt.initConfig({
		copy:{
			all:{
				expand:true
				,cwd:"dev"
				,src:"**"
				,dest:"dist"
			}
		}
		,clean:["dist"]
	});

	//registra as tasks
	grunt.registerTask("default",["clean","copy"]);
}