import { Component, OnInit } from '@angular/core';
import { Urls } from './constants/endpints';
import { IAllDogs, IRandomDog } from './model/dogs.model';
import { DogService } from './services/dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  allDogsData: IAllDogs;
  allDogsName: string[];
  random10Dogs: string[];
  imgUrl: string;
  constructor(public dogService: DogService) {}

  ngOnInit() {
    this.loadAllDogs();
    this.getRandomDog(Urls.getRandomDog);
  }
  getRandomDog(url: string) {
    this.dogService
      .getRandomDog(url)
      .subscribe((data) => (this.imgUrl = data.message));
  }
  loadAllDogs() {
    this.dogService.getAllDogs().subscribe((data) => {
      this.allDogsData = data;
      this.allDogsName = Object.keys(this.allDogsData.message);
      let subNames = [...this.allDogsName];
      subNames.forEach((name) => {
        if (this.allDogsData.message[name] != '') {
          this.allDogsName.push(
            ...[...this.allDogsData.message[name]].map((nm) => name + ' ' + nm)
          );
        }
      });
      this.random10Dogs = this.allDogsName
        .sort(() => Math.random() - Math.random())
        .slice(0, 9);
    });
  }

  showClicked(breedName: string) {
    this.getRandomDog(
      Urls.browseBreadp1 + breedName.replace(/\s+/g, '/') + Urls.browseBreadp2
    );
  }
}
