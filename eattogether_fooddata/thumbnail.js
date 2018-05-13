
router.post('/', upload.single('photo'), function(req, res, next){
	// origin_photo
	var relPath = req.file.path; // public/images/penguines.jpg
	var absPath = "http://13.124.214.189:4000/" + relPath.substring(7); // http://13.124.214.189:4000/public/images/penguines.jpg

	var thumbPath = thumbnail(req.file); // req.file: post로 받은 원본 파일

	//CODE
});

/* Make Thumbnail */
function thumbnail(file){
	// Ready to make Thumbnail
	var uploadedFile = file.path;
	var origin = file.filename;
	var index = origin.lastIndexOf('.');
	var prefix = origin.substring(0, index);
	var suffix = origin.substring(index);
	var thumbnail = prefix + "_thumbnail" + suffix;
	var srcFile = path.resolve(__dirname, '..', uploadedFile);
	var destFile = path.resolve(__dirname, '..', './public/images/thumbs', thumbnail);

	// Make Thumbnail with GM(graphic magick)
	gm(srcFile).resize(450, 450).gravity('center').crop(450, 318).write(destFile, function(err){
		if(err) {
			console.log('/thumbnail err=', err);
		} else {
			console.log("Thumbnail Create OK");
		}
	});

	var absPath = "http://13.124.214.189:4000/images/thumbs/" + thumbnail;
	return absPath;
}

