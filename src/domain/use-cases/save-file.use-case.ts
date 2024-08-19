import fs from 'fs';
export interface Options {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export interface SaveFileUseCase {
  execute: ( options: Options ) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor(
    //repository to call
  ) { }
  
  execute({
    fileContent,
    destination = 'outputs',
    fileName = 'table'
  }: Options): boolean {

    try {
      const outputPath = fs.mkdirSync(`${destination}/`, { recursive: true });
      fs.writeFileSync(`${outputPath}/${fileName}.txt`, fileContent);
      return true
    } catch (error) {
      console.log(error);
      return false;
    }

    

  }

}