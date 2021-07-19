/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class Firstclientservice {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_Firstclientservice

  async myclientstart(myInput: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          myInput: myInput,
        },
        local: {
          mylocalvar: undefined,
          mynumber: 0,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_2pjZRGVcgw4HCrXs(bh);
      //appendnew_next_myclientstart
      return (
        // formatting output variables
        {
          input: {},
          local: {
            mylocalvar: bh.local.mylocalvar,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Zo1ANyuvXogXX8pk');
    }
  }

  async anotherstart(...others) {
    try {
      var bh = {
        input: {},
        local: {
          anothervar: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_qpwAbk6mMSo6sZpG(bh);
      //appendnew_next_anotherstart
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fQfYJD10CD19SMvk');
    }
  }

  async onemorestart(...others) {
    try {
      var bh = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.sd_kNacgkgUiIAfL3Tl(bh);
      //appendnew_next_onemorestart
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sevIn5akHAIuY7iy');
    }
  }

  //appendnew_flow_Firstclientservice_start

  async sd_2pjZRGVcgw4HCrXs(bh) {
    try {
      console.log('Received output', bh.input.myInput);
      // console.log('mylocalvariable',bh.local.mylocalvar)

      bh.local.mylocalvar = {
        firstName: 'changed ' + bh.input.myInput.firstName,
        lastName: 'changed ' + bh.input.myInput.lastName,
      };

      // throw new Error("Throwing an Error")

      bh.local.mynumber = 10;
      bh = await this.namesdatahttprequest(bh);
      //appendnew_next_sd_2pjZRGVcgw4HCrXs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2pjZRGVcgw4HCrXs');
    }
  }

  async namesdatahttprequest(bh) {
    try {
      let requestOptions = {
        url:
          'https://raw.githubusercontent.com/Manikantha-M/files/main/names.json',
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.jsondata = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.mystorage(bh);
      //appendnew_next_namesdatahttprequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c9DexJ1dYKQIzNxr');
    }
  }

  async mystorage(bh) {
    try {
      localStorage.setItem('ourteam', JSON.stringify(bh.local.jsondata));
      this.sd_AIb9f8J5EK5hNPth(bh);
      //appendnew_next_mystorage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FAkLI9XgCnkEvQAI');
    }
  }

  async sd_AIb9f8J5EK5hNPth(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.jsondata);
      //appendnew_next_sd_AIb9f8J5EK5hNPth
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AIb9f8J5EK5hNPth');
    }
  }

  //__client_service_designer_class_variable_declaration__formdata
  formdata: any;
  async sd_qpwAbk6mMSo6sZpG(bh) {
    try {
      bh.local.anothervar = this.formdata;
      bh = await this.sd_8FOKR0TvdktwG1jM(bh);
      //appendnew_next_sd_qpwAbk6mMSo6sZpG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qpwAbk6mMSo6sZpG');
    }
  }

  async sd_8FOKR0TvdktwG1jM(bh) {
    try {
      // bh.local.anothervar = "Another data from second flow"
      console.log('Another var value');
      this.sd_amqyPahNbN8v5u6R(bh);
      //appendnew_next_sd_8FOKR0TvdktwG1jM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8FOKR0TvdktwG1jM');
    }
  }

  async sd_amqyPahNbN8v5u6R(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.anothervar);
      //appendnew_next_sd_amqyPahNbN8v5u6R
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_amqyPahNbN8v5u6R');
    }
  }

  async sd_zZneiaIJE4VQLp8x(bh) {
    try {
      console.log('Exception caught');
      console.log(bh.error);
      //appendnew_next_sd_zZneiaIJE4VQLp8x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zZneiaIJE4VQLp8x');
    }
  }

  async sd_kNacgkgUiIAfL3Tl(bh) {
    try {
      console.log(
        new Date().toLocaleTimeString(),
        'One more start method to execute'
      );
      //appendnew_next_sd_kNacgkgUiIAfL3Tl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kNacgkgUiIAfL3Tl');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.mycatchnode(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async mycatchnode(bh) {
    const catchConnectedNodes = ['sd_zZneiaIJE4VQLp8x'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_zZneiaIJE4VQLp8x(bh);
    //appendnew_next_mycatchnode
    return true;
  }
  //appendnew_flow_Firstclientservice_Catch
}
