import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
//import { MatPaginator } from '@angular/material/paginator';
//import { MatTableDataSource } from '@angular/material/table';
//import { Observable } from 'rxjs';

export interface products {
    id:number,
    codigo:string,
    title:string,
    price: number,
    category:string,
    description:string,
    image:string,
  }

  /*const Data: products[] = [
    {
        id:1,
        codigo: "050000",
        title: 'Paño',
        price: 2400,
        category: '...',
        description: 'Paño 100% algodon',
        image: './assets/image/Opera Instantánea_2021-09-18_233557_www.facebook.com.jpg'
    },
    {
        id:2,
        codigo: "050000",
        title: 'Abanico',
        price: 18900,
        category: '',
        description: 'Abanico Tifon FS-50A',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Olla cocimiento',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_234658_www.facebook.com.jpg'
    },
    {
        id:2,
        codigo: "090451",
        title: 'Horno Microondas',
        price: 42500,
        category: '',
        description: 'Horno Microondas Kintech',
        image: './assets/image/Opera Instantánea_2021-09-19_011341_www.facebook.com.jpg'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },{
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    }
  ];*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    //@ViewChild(MatPaginator) paginator:MatPaginator;

   /* @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
    obs: Observable<any> | undefined;
    dataSource: MatTableDataSource<products> = new MatTableDataSource<products>(Data);
*/
  title = 'Punto de venta: Ciudad Quesada';
  products = [
    {
        id:1,
        codigo: "050000",
        title: 'Paño',
        price: 2400,
        category: '...',
        description: 'Paño 100% algodon',
        image: './assets/image/Opera Instantánea_2021-09-18_233557_www.facebook.com.jpg'
    },
    {
        id:2,
        codigo: "050000",
        title: 'Abanico',
        price: 18900,
        category: '',
        description: 'Abanico Tifon FS-50A',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Olla cocimiento',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_234658_www.facebook.com.jpg'
    },
    {
        id:2,
        codigo: "090451",
        title: 'Horno Microondas',
        price: 42500,
        category: '',
        description: 'Horno Microondas Kintech',
        image: './assets/image/Opera Instantánea_2021-09-19_011341_www.facebook.com.jpg'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },{
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    },
    {
        id:2,
        codigo: "017539",
        title: 'Abanico',
        price: 22500,
        category: '',
        description: 'Olla cocimiento lento Kintech',
        image: './assets/image/Opera Instantánea_2021-09-18_232112_www.facebook.com.png'
    }
  ];

 

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    //this.changeDetectorRef.detectChanges();
    //this.dataSource.paginator = this.paginator;
    //consolethis.obs = this.dataSource.connect();
  }
  ngOnDestroy() {
   /* if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }*/
  }

  

}
