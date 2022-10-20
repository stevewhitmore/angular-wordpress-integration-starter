const { execSync } = require('child_process');
const fs = require('fs');
var path = require('path');
const destination = '../plugin/my-awesome-new-app';

// Run the build command
// execSync('ng build');

// Remove the dist folder in the plugin file if its present. Doesn't care if it's not.
// fs.rmSync(`${destination}/dist`, { recursive: true, force: true });

// Move the bundle from the `/app` folder to the plugin's folder
// execSync(`mv ./dist ${destination}`)

// copy the js and css file names to an array


distFilenames = fs.readdirSync(`${destination}/dist/my-awesome-new-app`);

scriptsAndStyleFiles = distFilenames.filter(file => file.endsWith('.js') || file.endsWith('.css'));

console.log(scriptsAndStyleFiles);

// write the new names to the php file

const pluginFileContents = fs.readFileSync(`${destination}/my-awesome-new-app.php`, 'utf8');

pluginFileContents.split(/\r?\n/).forEach(line => {
    if (line.includes('ng_styles')) {
        console.log(typeof(line))
        console.log(line)
        var result = line.match(/(?<=styles\.).*?(?=\.css)/gs);
        console.log(result)
    }
});

// fs.readFile(`${destination}/my-awesome-new-app.php`, 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });