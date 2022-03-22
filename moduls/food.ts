// 定义事物food
export class Food {
  // 定一个一个属性表示事物对应的元素
  element: HTMLElement;
  constructor() {
    // 获取页面的food元素并将其赋值给element
    this.element = document.getElementById('food')!;
  }
  // 定一个一个获取食物X坐标的方法
  get X(): number {
    return this.element.offsetLeft;
  }

  get Y(): number {
    return this.element.offsetTop;
  }
  // 修改食物的位置
  change(): void {
    // 生成随机数
    // Math.random() 生成一个0-1之间的随机数
    // Math.round() 四舍五入
    // Math.floor() 向下取整
    // 移动一次是一格，一格的大小是10，食物的坐标是整十
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}


// 定义记分牌类
export class ScorePanel {
  score = 0;
  level = 1;
  // 设置一个变量限制等级
  maxLevel: number;

  // 设置一个变量表示升级
  upScore: number

  scoreElement: HTMLElement
  levelElement: HTMLElement;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreElement = document.getElementById('score')!;
    this.levelElement = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;

  }
  // 增加分数
  addScore() {
    this.score += 1;
    this.scoreElement.innerText = this.score.toString();
    // 分数达到一定级别，级别加一
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  // 提升级别
  levelUp() {
    if (this.level <= this.maxLevel) {
      this.level += 1;
      this.levelElement.innerText = this.level.toString();
    }
  }
}


// 定义蛇类
// 先整雏形，再定义方法

export class Snake {
  // 定义蛇头
  head: HTMLElement
  // 身体
  bodies: HTMLCollectionOf<HTMLDivElement>;

  element: HTMLElement;

  constructor() {
    this.head = document.querySelector('#snake > div') as HTMLElement;
    // this.bodies = document.querySelectorAll('#snake > div:not(:first-child)');
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    this.element = document.getElementById('div')!;
  }

  // 获取蛇头的坐标
  get headX(): number {
    return this.head.offsetLeft;
  }

  get headY(): number {
    return this.head.offsetTop;
  }
  // 设置蛇头的坐标
  set headX(x: number) {
    this.head.style.left = x + 'px';
  }
  set headY(y: number) {
    this.head.style.top = y + 'px';
  }
  // 设置蛇增加一个身体的方法
  addBody(): void {
    // insertAdjacentElement() 方法可向节点插入一个新的子节点
    this.element.insertAdjacentElement('beforeend', this.bodies[0]);
  }
}


