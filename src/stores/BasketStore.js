import { observable, action, computed } from 'mobx'

class BasketStore {
  uid = 0
  @observable currentList = []
  @observable eatenList = []
  @action.bound eat(index) {
    this.eatenList.push(...this.currentList.splice(index, 1))

  }
  @action.bound pick() {
    this.uid++
    this.currentList.push({
      id: this.uid,
      weight: Math.floor(Math.random() * 30) + 200,
    })
  }
  @computed get totalEaten() {
    return { num: this.eatenList.length, weight: this.eatenList.reduce((acc, apple) => (acc += apple.weight), 0) }
  }
  @computed get currentBasket() {
    return { num: this.currentList.length, weight: this.currentList.reduce((acc, apple) => (acc += apple.weight), 0) }
  }
}

const basket = new BasketStore()

export default basket
