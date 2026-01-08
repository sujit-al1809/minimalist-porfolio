const fs = require('fs');
const path = 'src/app/globals.css';

try {
    let content = fs.readFileSync(path, 'utf8');
    // Find the last valid closing brace before the corruption
    // The corruption starts after the @media (max-width: 768px) block
    // We look for ".experience-card-right" block end
    const anchor = 'padding-top: 1.5rem;\n  }';
    const lastIndex = content.lastIndexOf('padding-top: 1.5rem;');

    if (lastIndex !== -1) {
        // Find the next closing brace
        const braceIndex = content.indexOf('}', lastIndex);
        if (braceIndex !== -1) {
            // Truncate after that brace
            content = content.substring(0, braceIndex + 1);

            // Append the clean CSS
            const newCss = `

/* Menu Visibility Breakpoint - Keep this higher */
@media (max-width: 1100px) {
  .desktop-menu {
    display: none !important;
  }

  .mobile-toggle {
    display: flex !important;
  }
}
`;
            fs.writeFileSync(path, content + newCss, 'utf8');
            console.log('Fixed globals.css');
        } else {
            console.log('Could not find closing brace');
        }
    } else {
        console.log('Could not find anchor');
    }
} catch (e) {
    console.error(e);
}
