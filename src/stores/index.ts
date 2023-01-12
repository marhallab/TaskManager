//TODO: Create a method to update the name of a board inside of listBoard
//TODO: Create a method to delete a board inside of listBoard 


import { defineStore } from 'pinia'
import Board from '@/models/board'

export const useTaskManagerStore = defineStore('taskManager', {
  state: () => {
    return {
      listBoards: [] as Array<Board>,
      currentBoard: {} as Board,
      latestBoardId: 0 as number,
      isNavBarOpen: true as boolean
    }
  },

  getters: {},

  actions: {
    initialize() {
      this.listBoards = JSON.parse(window.localStorage.getItem('listBoards') || '[]')
      if (this.listBoards.length > 0) {
        this.latestBoardId = this.listBoards[this.listBoards.length - 1].id;
      }
    },

    getBoardById(id: number) {
      return this.listBoards.find(board => board.id === id) || { id: 0, name: '' };
    },

    addBoard(name: string) {
      this.latestBoardId++
      const newBoard = new Board(this.latestBoardId, name);
      this.listBoards.push(newBoard)
    },

    updateListBoards() {
      window.localStorage.setItem('listBoards', JSON.stringify(this.listBoards));
    }
  }
})