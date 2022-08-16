import fs from "fs";
import path from "path";

const io = {
    /**
     * check dir 
     * @param path path to check
     */
    exist: function (path: string): boolean {
        return fs.existsSync(path);
    },

    /**
     * test path for file
     * @param path file or dir path
     * @returns return true if path is a file
     */
    isFile: function (path: string): boolean {
        const info = fs.statSync(path);
        return info.isFile();
    },

    /**
     * make a dir
     * @param dir dir
    */
    mkdir: function (dir: string) {
        fs.mkdirSync(dir, { recursive: true });
    },

    /**
     * remove a dir
     * @param dir dir
     */
    rmdir: function (dir: string) {
        fs.rmSync(dir, { recursive: true, force: true });
    },

    /**
     * get all files in dir
     * @param dir dir 
     * @returns filepath array
     */
    files: function (dir: string): string[] {
        const files = fs.readdirSync(dir);
        return files.map(i => path.join(dir, i)).filter(i => this.isFile(i));
    },
}

export default io;