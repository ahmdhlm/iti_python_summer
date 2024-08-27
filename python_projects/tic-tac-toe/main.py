import os

def clear_screen():
    os.system("cls" if os.name=="nt" else "clear")    

class Player:
    def __init__(self):
        self.name =""
        self.symbol =""

    def choose_name(self):        
        while True:
            name = input("Enter your name (Letters only)")
            if name.isalpha() == True:
                self.name = name
                break
            print("Invalid Name , please, use letters only")

    def choose_symbo(self):
        while True:
            symbol = input(f"{self.name}, choose your symbol (a single letter )")

            if symbol.isalpha() and len(symbol)==1:
                self.symbol =symbol.upper()
                break
            print ("Invalid Symbol, PLease choose a single letter")

class Menu:
    def display_main_menu(self):
        menu_text=  """
                    Welcome to tic toc Game
                    ------------------------------
                    1. Start Game
                    2. Quit 
                    ------------------------------
                    Enter your choice (1 or 2)
                    """   
        
        choice = input(menu_text)
        return choice
    
    def display_end_game_menu(self):
        menu_text = """         
        ---------------------------
        1.Start Game
        2. Quit Game
        ---------------------------
        Enter your choice (1 or 2): 
        """
        
        choice = input(menu_text)
        return choice


class Board:
    def __init__(self):
        self.board =[str(i) for i in range(1,10)]
        # self.board = ['1', '2', '3', ....  ,'9']
        # for i in range(1,10):
        #     self.board.append(str(i))

        
    def display_board(self):        
            for i in range(0,9,3):
                print('|'.join(self.board[i : i + 3]))
            if i < 6:
                print('-'*5)

    

    def update_board(self, choice, symbol):
        if self.is_valid_move(choice):
            self.board[choice - 1] = symbol
            return True
        return False

    def is_valid_move(self,choice):
        return self.board[choice - 1].isdigit()
            

    

    def reset_board(self):
        self.board =[str(i) for i in range(1,10)]
# sample =['1','2','3','4','5','6','7','8','9']
# for i in range(0,9,3):
#     print('|'.join(sample[i : i + 3]))
#     if i <6:
#         print('-'*5)

class Game:
    def __init__(self) -> None:
        self.players = [Player(),Player()] #2 object of player class
        self.board =Board()
        self.menu =Menu()
        self.current_player_index = 0


    def start_game(self):
        choice =self.menu.display_main_menu()
        if choice == "1":
            self.setup_player()
            self.play_game()
        else:
            self.quit_game()
        
    def setup_player(self):
        for number,player in enumerate(self.players, start = 1):
            print(f"Player{number},Enter Your details")
            player.choose_name()
            player.choose_symbo()
            clear_screen()

    def play_game(self):
        while True:
            self.play_turn()
            
            winning_symbol = self.check_win()
            if winning_symbol:
                self.board.display_board()
                winner = next(player for player in self.players if player.symbol == winning_symbol)
                print(f"Congratulations! {winner.name} wins!😊😊")
                choice = self.menu.display_end_game_menu()
                if choice == "1":
                    self.restart_game()
                else:
                    self.quit_game()
                    break
            elif self.check_draw():
                self.board.display_board()
                print("It's a draw!")
                choice = self.menu.display_end_game_menu()
                if choice == "1":
                    self.restart_game()
                else:
                    self.quit_game()
                    break


    def play_turn(self):
        Player = self.players[self.current_player_index]
        self.board.display_board()
        print(f"{Player.name}'s turn {Player.symbol} ")
        while True:
            try:
                cell_choice = int(input("Choose a cell (1 - 9 ): "))
                if cell_choice <= 9 and self.board.update_board(cell_choice,Player.symbol):
                    break 
                else:
                    print("Invalid move, Try again.")
            except:
                print("Please Enter a number between 1 and 9")
        self.switch_player()


    def switch_player(self):
        self.current_player_index = 1 - self.current_player_index
    def check_win(self):
        win_combination = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  # rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  # columns
            [0, 4, 8], [2, 4, 6]              # diagonals
        ]
        
        for combo in win_combination:
            if self.board.board[combo[0]] == self.board.board[combo[1]] == self.board.board[combo[2]]:
                return self.board.board[combo[0]]  # Return the symbol of the winning player
        
        return None  # Return None if there is no winner yet


    
    def check_draw(self):
         return all (not cell.isdigit() for cell in self.board.board)
        #all is used to check all cells 
    def restart_game(self):
        self.board.reset_board()
        self.current_player_index = 0
        self.play_game()
        
            
    def quit_game(self):
        print("thank you for playing 😊😊😊")


game = Game()
game.start_game()