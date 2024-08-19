export interface CreateTableOptions {
  base: number;
  limit: number;
}


export interface CreateTableUseCase {
  execute: ( options: CreateTableOptions ) => string;
}


export class CreateTable implements CreateTableUseCase {
  constructor(
    //DI - Dependency Injection
    
  ) { }
  
  execute({ base, limit }: CreateTableOptions) {
    
    let counter = 0;

    let output = '';

    while (counter <= limit) {
      output += `\n ${counter} x ${base} = ${counter * base}`
      counter++
    }

    return output;
  }
}
