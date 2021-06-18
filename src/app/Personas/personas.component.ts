import{ Component }from "@angular/core";

@Component({
	selector: 'app-personas',
	templateUrl: './personas.component.html',
	styleUrls:['./personas.component.css']
})
export class PersonasComponent{
	desabilitar = false;
	mensaje = 'No se ha agregado ninguna persona';
	titulo = '';
	agregarPersona(){
		this.mensaje = 'Persona agregada';
	}
	ModificarTitulo(e: Event){
		this.titulo= (<HTMLInputElement>e.target).value;
	}

}