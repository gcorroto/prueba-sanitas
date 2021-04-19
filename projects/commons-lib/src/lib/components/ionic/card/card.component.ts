import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardBaseComponent } from '../../base/card/card.component';
import { fromEvent } from 'rxjs';
import { delay, map, mapTo, repeat, share, switchMap, merge, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'san-pt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardIonicComponent extends CardBaseComponent  implements OnInit, AfterViewInit {

  @ViewChild('card', { static: true }) card: ElementRef;



  height;
  width;
  backgroundImage;
  mouseX = 0;
  mouseY = 0;
  get mousePX() {
    return this.card && this.card.nativeElement ? this.mouseX / this.card.nativeElement.offsetWidth : this.mouseX;
  }
  get mousePY() {
    return this.card && this.card.nativeElement ? this.mouseY / this.card.nativeElement.offsetHeight  : this.mouseY;
  }

  cardStyle() {
    if(this.animacion) {
      return this.transformStyle();
    }
  }

  private transformStyle() {
    const tX = this.mousePX * -1;
    const tY = this.mousePY * -10;
    return { transform: `rotateY(${tX}deg) rotateX(${tY}deg)` };
  }
  get nativeElement(): HTMLElement {
    return this.card.nativeElement;
  }

  ngOnInit() {
    const mouseMove$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mousemove');
    const mouseLeave$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseleave').pipe(
      delay(100),
      mapTo(({ mouseX: 0, mouseY: 0 })),
      share()
    )
    const mouseEnter$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseenter').pipe(takeUntil(mouseLeave$))

    mouseEnter$.pipe(
      switchMap(() => mouseMove$),
      map((e: MouseEvent) => ({ mouseX: e.pageX - this.nativeElement.offsetLeft - this.card.nativeElement.offsetWidth / 2, mouseY: e.pageY - this.nativeElement.offsetTop - this.card.nativeElement.offsetHeight / 2 }))
      , merge(mouseLeave$), repeat()
    ).subscribe((e:  {
      mouseX: number;
      mouseY: number;
  } | {
      mouseX: number;
      mouseY: number;
  }) => {
      this.mouseX = e.mouseX;
      this.mouseY = e.mouseY;
    })

  }
  ngAfterViewInit() {
    this.width = this.card.nativeElement.offsetWidth;
    this.height = this.card.nativeElement.offsetHeight;
  }



}
