
import { Injectable } from '@angular/core';
import Promise from 'promise-polyfill';

import { Storage } from "@ionic/storage";

/*
  Generated class for the RewardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RewardServiceProvider {
  constructor(private storage: Storage) {
    console.log("Hello RewardServiceProvider Provider");
  }

  rewards: any[] = [];

  list: any[] = [0.5, 2, 5, 32, 12, 15, 23, 25, 42];

  rewardsCheck(user, userData) {
    return new Promise((resolve, reject) => {
      userData.logins += 1;
      if (userData.logins == 2) {
        let firstReward = this.rewardChance(user, userData.rewardCount);
        userData.rewardCount = firstReward;
        resolve(userData);
      } else if (userData.logins % 10 == 0) {
        let newCount = this.rewardChance(user, userData.rewardCount);
        userData.rewardCount = newCount;
        resolve(userData);
      } else {
        resolve(userData);
      }
    });
  }

  rewardChance(user, count){
    if(count == 0){
      count ++;
      this.generateReward(user, count);
      return count;
    }
    else {
      let chance = Math.floor((Math.random() * 100) +1);

      if(chance > 50){
        count++;
        this.generateReward(user, count);
        return count;
      }
      else {
        return count; 
      }
    }
  }
  generateReward(user, count){
    let dex = Math.floor((Math.random() * 10))
    let rewarded = this.list[dex];

    let rewardObj = {
      rewardId: `REW-${count}`,
      amount: rewarded
    }

    this.storage.get(`${user}-rewards`)
    .then( returned => {
      if(!returned) {
        this.rewards.push(rewardObj);
        this.storage.set(`${user}-rewards`,this.rewards)
        .then(res => console.log(user, `Awarded ${rewarded}`));
      }
    })

  }
}
