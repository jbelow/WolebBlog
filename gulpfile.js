// // IMPORTS
// const gulp = require('gulp');


// // TASK FUNCTIONS
// function testTask(done){
//     console.log("Test task running...");
//     done();
// }


// // EXPORTS
// exports.test = testTask;


// IMPORTS
const gulp = require('gulp');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');


// TASK FUNCTIONS
function testTask(done){
    console.log("Test task running...");
    done();
}

function copy(done){
	gulp.src("src/index.html").pipe(gulp.dest("dist/"));
	done();
}

function babelTask(done){
	gulp.src('src/**/*.js')
			.pipe(babel())
			.pipe(gulp.dest('./dist')); //the path was wrong here, but this is correct
	done();
}

function images(done) {
	gulp.src('src/images/**/*')
		.pipe(imagemin({ optimizationLevel: 5 }))
		.pipe(gulp.dest('dist/images/'));

	done();
}

function processSass(done){
	gulp.src('src/css/style-main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/css/'));

	done();
}

function copy(done){
	gulp.src("src/index.html").pipe(gulp.dest("dist/"));
	gulp.src("src/css/style-main.css").pipe(gulp.dest("dist/css/"));
	done();
}

function watchSass(){
	gulp.watch('src/css/style-main.scss', processSass);
}

// EXPORTS
exports.test = testTask;

exports.copy = copy;

exports.babel = babelTask;

exports.default = gulp.parallel(copy, babelTask);

exports.images = images;

exports.default = gulp.parallel(copy, babelTask, images);

exports.sass = processSass;

exports.default = gulp.parallel(processSass, copy, babelTask, images);

exports.watchSass = watchSass;
