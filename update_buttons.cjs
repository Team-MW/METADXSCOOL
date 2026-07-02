const fs = require('fs');
const path = require('path');

const dir = '/Users/elamine/Desktop/MWCREA/site_clients/metaDXscool/src/pages/formation';

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.tsx')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Replace CONTACTEZ-NOUS text
        if (content.includes('CONTACTEZ-NOUS')) {
            // Find the <a> tag containing CONTACTEZ-NOUS
            // Example: <a href="..." className="...">CONTACTEZ-NOUS</a>
            const regex = /<a\s+href="[^"]*"(.*?)>CONTACTEZ-NOUS<\/a>/g;
            content = content.replace(regex, '<a href="/contact"$1>COMMENT NOUS CONTACTER</a>');
            modified = true;
        }

        // Replace DOSSIER DE CANDIDATURE text
        if (content.includes('DOSSIER DE CANDIDATURE')) {
            content = content.replace(/DOSSIER DE CANDIDATURE/g, 'CANDIDATER');
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    }
});
