import { defineStore } from 'pinia'

export const useTalkStore = defineStore('talk', {
  // 真正存储数据的地方
  state() {
    return {
      talkList: [
        { id: '01', title: '测试语句1' },
        { id: '02', title: '测试语句2' },
        { id: '03', title: '测试语句3' },
      ],
    }
  },
})
