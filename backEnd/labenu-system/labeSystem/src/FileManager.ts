import * as fs from "fs";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Mission } from "./Mission";

export class FileManager {
    constructor(private filePath: string) {}     
    
    public setFilePath(path: string): void{
        this.filePath = path;
    }
    
    public writFile(data: any): void{
        fs.writeFileSync(this.filePath, JSON.stringify(data));
    }

    public readFile(): any{
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }

    public registerInJson(classInstance: Student | Teacher | Mission) {
        let classInstances: (Student | Teacher | Mission)[] = [];
        try {
          classInstances = this.readFile();
        }catch (e) {
            if(e) {
                this.writFile(classInstances)
            }
        }
        classInstances.push(classInstance)
        return this.writFile(classInstances)
    }
}