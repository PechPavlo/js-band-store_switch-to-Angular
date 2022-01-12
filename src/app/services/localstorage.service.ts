import { Injectable } from '@angular/core';

import { Localstorage } from '../shared/localstorage';

@Injectable()
export class LocalstorageService {
  localData: Localstorage = { token: 'test', username: 'test', avatar: 'test' };

  getLocalData() {
    return (
      localStorage['pechPavloBookStoreAngular'] &&
      JSON.parse(localStorage['pechPavloBookStoreAngular'])
    );
  }
  setLocalData(localData: Localstorage) {
    localStorage['pechPavloBookStoreAngular'] = JSON.stringify(localData);
  }
}
