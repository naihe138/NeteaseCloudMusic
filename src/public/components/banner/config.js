const tranform1 = [
  {
    zIndex: 3,
    transform: `translateZ(150px)`,
    top: '22px'
  },
  {
    zIndex: 1,
    transform: `translate3d(154px, 0, 0px)`,
    top: '18px'
  },
  {
    zIndex: 1,
    transform: `translate3d(-154px, 0, 0px)`,
    top: '18px'
  }
]

const tranform2 = [
  {
    zIndex: 1,
    transform: `translateZ(0px)`,
    top: '18px'
  },
  {
    zIndex: 3,
    transform: `translate3d(154px, 0, 150px)`,
    top: '22px'
  },
  {
    zIndex: 1,
    transform: `translate3d(308px, 0, 0px)`,
    top: '18px'
  }
]

const tranform3 = [
  {
    zIndex: 1,
    transform: `translateZ(0px)`,
    top: '18px'
  },
  {
    zIndex: 1,
    transform: `translate3d(-308px, 0, 0px)`,
    top: '18px'
  },
  {
    zIndex: 3,
    transform: `translate3d(-154px, 0, 150px)`,
    top: '22px'
  }
]

const orderArr = [[2, 1, 3], [3, 2, 1], [1, 3, 2]]

export default {
  tranform1,
  tranform2,
  tranform3,
  orderArr
}

