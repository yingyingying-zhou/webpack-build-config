import { Food, ScorePanel, Snake } from './food'
// 游戏控制器
class GameControl {
  // 定义三个属性

  // 定义一个蛇的属性
  snake: Snake;
  // 定义一个食物的属性
  food: Food;
  // 定义一个记分牌的属性
  scorePanel: ScorePanel;

  constructor() {
    // 创造实例
    // 初始化蛇
    this.snake = new Snake();
    // 初始化食物
    this.food = new Food();
    // 初始化记分牌
    this.scorePanel = new ScorePanel();

    // 创建一个属性存储按键

  }
  // 游戏初始化,调用后游戏开始
  init() {
    // 绑定键盘事件
    document.addEventListener('keydown', this.keydownHandle);
  }

  // 创建键盘响应函数
  keydownHandle(event: KeyboardEvent) {
    console.log(event.key);
    // 判断按键
    switch (event.keyCode) {
      case 37:
        // 左
        break;
      case 38:
        // 上
        break;
      case 39:
        // 右
        break;
      case 40:
        // 下
        break;
    }
  }

}

export default GameControl;