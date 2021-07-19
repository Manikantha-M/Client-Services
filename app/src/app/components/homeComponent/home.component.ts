/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firstclientservice } from 'app/sd-services/Firstclientservice';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
     public registrationForm!: FormGroup;
     submitted:boolean=false;;

    constructor(private fb : FormBuilder, private myclient:Firstclientservice) {
        super();
    }

    ngOnInit() {
        this.registrationForm = this.fb.group({
        firstName : [''],
        lastName: [''],
        });
    }

    async onSubmit(){
        var valuefromclient;
        this.submitted = true;
        console.log(this.registrationForm.value);

        valuefromclient = (await this.myclient.myclientstart(this.registrationForm.value)).local.mylocalvar;
        console.log("changed output from client is", valuefromclient);
    }
}
