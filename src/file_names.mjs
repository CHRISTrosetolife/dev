import glob from 'glob';
export function file_names() {
    glob('dirname/**/*.js', function( err, files ) {
        console.log( files );
      });
}