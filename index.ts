import * as fs from 'fs';
const pagesPath = './pages';

fs.readdir(pagesPath,(err: NodeJS.ErrnoException | null, files: string[])=>{

    if(!err){
        let mdString = '';
       
        for(const file of files)
            {
                mdString += `---\nsrc: ${pagesPath}/${file}\n---\n\n`;
            }

        if(mdString.length){

            fs.writeFileSync('./slides.md', mdString);
        }
        
    }
})