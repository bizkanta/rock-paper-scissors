import { Component, EventEmitter, Output } from '@angular/core';
import { GameChoices } from "../../enums/game-choices.enum";
import { PlayerType } from "../../enums/player-type.enum";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  @Output() winnerChosen = new EventEmitter<PlayerType>();
  gameChoices = GameChoices;

  computerChoice!: GameChoices;
  humanChoice!: GameChoices;

  selectComputerChoice() {
    const enumValues = Object.values(this.gameChoices);
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    this.computerChoice = enumValues[randomIndex]
  }

  selectChoice(choice: GameChoices) {
    this.selectComputerChoice();
    const winner: PlayerType = this.chooseWinner(choice);
    this.winnerChosen.emit(winner);
    this.humanChoice = choice;
  }

  chooseWinner(choice: GameChoices): PlayerType {
    switch(choice) {
      case GameChoices.rock:
        if(this.computerChoice === GameChoices.paper) return PlayerType.computer;
        if(this.computerChoice === GameChoices.scissors) return PlayerType.human;
        break;
      case GameChoices.paper:
        if(this.computerChoice === GameChoices.rock) return PlayerType.human;
        if(this.computerChoice === GameChoices.scissors) return PlayerType.computer;
        break;
      case GameChoices.scissors:
        if(this.computerChoice === GameChoices.paper) return PlayerType.human;
        if(this.computerChoice === GameChoices.rock) return PlayerType.computer;
        break;
      default:
        return PlayerType.none;
    }

    return PlayerType.none;
  }
}
