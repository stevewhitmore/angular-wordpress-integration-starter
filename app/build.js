const { execSync } = require('child_process');
const fs = require('fs');
const pluginName = 'my-awesome-new-app';
const pluginFileName = `${pluginName}.php`;
const destination = `../plugin/${pluginName}`;
const pluginFilePath = `${destination}/${pluginName}.php`

// Remove the dist folder in the plugin file if its present. Doesn't care if it's not.
fs.rmSync(`${destination}/dist`, { recursive: true, force: true });

// Run the build command
execSync('ng build --configuration production', { encoding: 'utf-8', stdio: 'inherit' });

// Move the bundle from the `/app` folder to the plugin's folder
execSync(`mv ./dist ${destination}`)

// copy the js and css file names to an array
distFilenames = fs.readdirSync(`${destination}/dist/my-awesome-new-app`);
scriptsAndStyleFiles = distFilenames.filter(file => file.endsWith('.js') || file.endsWith('.css'));

// replace the js and css file names in the php file
const pluginFileContents = fs.readFileSync(`${pluginFilePath}`, 'utf8');

const updateLine = (line, name) => {
    const matchedLinePart = line.match(/(?<=app\/).*?(?=\')/gs).toString();
    const matchedFileName = scriptsAndStyleFiles.find(file => file.includes(name));
    return line.replace(matchedLinePart, matchedFileName);
}

const updatedFileContentArray = pluginFileContents.split(/\r?\n/).map(line => {
    if (line.includes('wp_enqueue_style( \'ng_styles')) {
        return updateLine(line, 'styles');
    }
    if (line.includes('wp_register_script( \'ng_main')) {
        return updateLine(line, 'main');
    }
    if (line.includes('wp_register_script( \'ng_polyfills')) {
        return updateLine(line, 'polyfills');
    }
    if (line.includes('wp_register_script( \'ng_runtime')) {
        return updateLine(line, 'runtime');
    }
    return line;
});
const updatedFileContents = updatedFileContentArray.join('\n');

// write the new names to the php file
fs.writeFileSync(`${pluginFilePath}`, updatedFileContents);
console.log(`*************** ${pluginFileName} updated! ***************`)