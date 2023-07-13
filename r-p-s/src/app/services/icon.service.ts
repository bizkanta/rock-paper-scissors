import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

const icons = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
}

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

  public registerIcons(): void {
    this.loadIcons(new Map(Object.entries(icons)), '/assets/icons');
  }

  private loadIcons(icons: Map<string, string>, iconUrl: string): void {
    icons.forEach((value: string, key: string) => {
      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${value}.svg`)
      );
    });
  }
}
