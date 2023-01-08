//TODO: Create a method to update listBoards in localstorage if any data inside of listBoards changes (add, update or delete board)
//TODO: Create a method to update the name of a board inside of listBoard
//TODO: Create a method to delete a board inside of listBoard 


import { defineStore } from 'pinia'

class Board {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const useTaskManagerStore = defineStore('taskManager', {
  state: () => {
    return {
      listBoards: [] as Array<Board>,
      currentBoard: {} as Board,
      latestBoardId: 0 as number
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

    updateBoard() {
      window.localStorage.setItem('listBoards', JSON.stringify(this.listBoards));
    }
  }
})