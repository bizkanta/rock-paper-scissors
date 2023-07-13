import { Component } from '@angular/core';
import { ResultType } from "../../enums/result-type.enum";
import { PlayerType } from "../../enums/player-type.enum";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  humanScore = 0;
  computerScore = 0;
  result: unknown;

  updateScore(winner: PlayerType) {
    switch(winner) {
      case PlayerType.human:
        this.humanScore++;
        this.result = ResultType.won;
        break;
      case PlayerType.computer:
        this.computerScore++;
        this.result = ResultType.lose;
        break;
      default:
        this.result = ResultType.draw;
    }
  }
}
