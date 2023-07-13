import {Component, OnInit} from '@angular/core';
import { ResultType } from "../../enums/result-type.enum";
import { PlayerType } from "../../enums/player-type.enum";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score = {
    humanScore: 0,
    computerScore: 0
  }

  result!: ResultType;

  ngOnInit(): void {
    this.score = JSON.parse(localStorage.getItem('score')
      || JSON.stringify(this.score));
  }

  updateScore(winner: PlayerType) {
    switch(winner) {
      case PlayerType.human:
        this.score.humanScore++;
        this.result = ResultType.won;
        break;
      case PlayerType.computer:
        this.score.computerScore++;
        this.result = ResultType.lose;
        break;
      default:
        this.result = ResultType.draw;
    }
    localStorage.setItem('score', JSON.stringify(this.score))
  }
}
