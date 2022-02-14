/**
 * Required External Modules
 */
const prompt = require('prompt-sync')();
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	// 		REQUERIMENTOS:
	// R01 – IMPRIMIR MENSAGEM PERGUNTANDO QUANTIDADE DE
	// ALUNOS;
	// R02 – LER E ARMAZENAR INFORMAÇÃO;
	// R03 – IMPRIMIR MENSAGEM PERGUNTANDO NOME E NOTA DO
	// ALUNO (DE ACORDO COM A QUANTIDADE DO R01);
	// R04 – IMPRIMIR O ALUNO COM MAIOR NOTA;

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
	// R01 – IMPRIMIR MENSAGEM PERGUNTANDO QUANTIDADE DE ALUNOS; 
	// R02 - LER E ARMAZENAR INFORMAÇÃO;
	let alunosQtd = prompt("Insira a qtd de alunos\n");

	// R03 - IMPRIMIR MENSAGEM PERGUNTANDO NOME E NOTA DO
	// ALUNO (DE ACORDO COM A QUANTIDADE DO R01);
	let alunos = [];

	for(let i = 0; i <= alunosQtd.length; i++){
		let obj = Object.create(null);
		obj.Nome = prompt(`Qual o nome do ${i+1}º aluno?`);
		obj.Nota = parseFloat(prompt(`Qual a nota do ${i+1}º aluno?`));
		alunos.push(obj);
	}
	alunos.forEach(aluno => console.log(aluno));

	// R04 – IMPRIMIR O ALUNO COM MAIOR NOTA;
	let obj = Object.create(null);
	obj.Nome = "";
	obj.Nota = 0.0;

	for(let i = 0; i < alunos.length; i++){
		if(obj.Nota < alunos[i].Nota){
			obj.Nome = alunos[i].Nome;
			obj.Nota = alunos[i].Nota;
		}
	}
	
	console.log(`Aluno com a maior nota: \n${obj.Nome} - Nota: ${obj.Nota}`);


});
