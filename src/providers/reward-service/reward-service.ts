
import { Injectable } from '@angular/core';
import Promise from 'promise-polyfill';
/*
  Generated class for the RewardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RewardServiceProvider {

  constructor() {
    console.log('Hello RewardServiceProvider Provider');
  }

  rewardsCheck(user, userData){
    return new Promise((resolve, reject) => {
      userData.logins += 1
      if(userData.logins == 2){
        let firstReward = this.rewardChance(user, userData.rewardCount);
        userData.rewardCount = firstReward;
        resolve(userData);
      }
      else if(userData.logins % 10 == 0) {
        let newCount = this.rewardChance(user, userData.rewardCount);
        userData.rewardCount = newCount;
        resolve(userData);
      }
      else {
        resolve(userData);
      }
    })
  }

}
