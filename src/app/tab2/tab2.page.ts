import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ClientesSerivices } from '../services/clientes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
    export class Tab2Page {
      form: any;

      constructor(private fb: FormBuilder,
        private clientesService:ClientesSerivices,
        private alertController: AlertController) {}

        ngOnInit(){
          this.crearFormulario();
        }
        crearFormulario(){
          this.form = this.fb.group({
            documento_identidad:['', Validators.required],
            nombre_completo:['', Validators.required],
            direccion:['',Validators.required],
            telefono:['',Validators.required],
            email:['',Validators.required]
          })
        }
    GuardarClientes(){
      console.log("en este momento estoy guardando")
      console.log (this.form.value)
      this.clientesService.GuardarClientes(this.form.value).subscribe(
        (res) => {
          console.log (res)
        },
        (err) => {
          console.log(err);
        }
      )
    }
}
