import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'app/services/component.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    value:string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '',value:"" },
    { path: '/user-data', title: 'User Data',  icon: 'person', class: '', value:""},
    { path: '/features', title: 'Features',  icon: 'dashboard', class: '',value:""},

    // { path: '/product/woodStainer', title: 'woodStainer',  icon: 'person', class: '',value:"" },
    
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' ,value:""},
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' ,value:""},
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' ,value:""},
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' ,value:""},
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' ,value:""},
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '',value:"" },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro',value:"" },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  mainMenuItems:any=[];
  menuProducts:any=[];
  menuFeatures:any=[];
  menuInteractions:any=[];

  constructor(private componentService:ComponentService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.getProductList();
  }
  isMobileMenu() {
      // if ($(window).width() > 991) {
      //     return false;
      // }
      // return true;
  };
  getProductList(){
    // this.componentService.getProductList().subscribe((res:any)=>{
    //     if(res!=null && res.data!=null)
    //     {
    //       var menus=[];
    //       menus=res.data;
    //         menus.forEach(element => {
    //             this.menuItems.push(
    //               { path: '/product/'+element.sDataPointKey+"/"+element.sDisplayName, title: element.sDisplayName,  icon: 'library_books', class: '',value:"" }
    //               );
    //         });
    //     }
    // });

    this.mainMenuItems=[];

      this.menuProducts.push(
        { path: '/product/'+ "wallColor"+"/"+"Wall Color", title: "Wall Color",  icon: 'library_books', class: '',value:"" }
        );

        this.menuProducts.push(
          { path: '/product/'+ "wallExtColor"+"/"+"Wall Ext Color", title: "Wall Ext Color",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "wallPaper"+"/"+"WallPaper", title: "WallPaper",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "layeredWallpaper"+"/"+"Layered Wallpaper", title: "Layered Wallpaper",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "wallTexture"+"/"+"Wall Texture", title: "Wall Texture",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "coloredTextures"+"/"+"Colored Textures", title: "Colored Textures",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "illusion"+"/"+"Illusion", title: "Illusion",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "coloredIllusion"+"/"+"Colored Illusion", title: "Colored Illusion",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "woodColor"+"/"+"Wood Color", title: "Wood Color",  icon: 'library_books', class: '',value:"" }
          );

this.menuProducts.push(
          { path: '/product/'+ "woodClearCoat"+"/"+"Wood Clear Coat", title: "Wood Clear Coat",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "woodStainer"+"/"+"Wood Stainer", title: "Wood Stainer",  icon: 'library_books', class: '',value:"" }
          );   
this.menuProducts.push(
          { path: '/product/'+ "metalColor"+"/"+"Metal Color", title: "Metal Color",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "glassColor"+"/"+"Glass Color", title: "Glass Color",  icon: 'library_books', class: '',value:"" }
          );
this.menuProducts.push(
          { path: '/product/'+ "glassStencil"+"/"+"Glass Stencil", title: "Glass Stencil",  icon: 'library_books', class: '',value:"" }
          );

this.menuProducts.push(
          { path: '/product/'+ "floorFinish"+"/"+"Floor Finish", title: "Floor Finish",  icon: 'library_books', class: '',value:"" }
          );

this.menuProducts.push(
          { path: '/product/'+ "floorColor"+"/"+"Floor Color", title: "Floor Color",  icon: 'library_books', class: '',value:"" }
          );

this.menuProducts.push(
          { path: '/product/'+ "stencil"+"/"+"Stencil", title: "Stencil",  icon: 'library_books', class: '',value:"" }
          );







          this.menuInteractions.push(
            { path: '/product/'+ "roomType"+"/"+"Room Type", title: "Room Types",  icon: 'library_books', class: '',value:"" }
            );

            this.menuInteractions.push(
              { path: '/product/'+ "surfaceArea"+"/"+"Surface Area", title: "Surfaces",  icon: 'library_books', class: '',value:"" }
              );




                 this.menuFeatures.push(
                    { path: '/product/'+ "socialShare"+"/"+"Social Share", title: "Social Share",  icon: 'library_books', class: '',value:"" }
                    );
    
                  
                    this.menuFeatures.push(
                      { path: '/product/'+ "socialShareCvApp"+"/"+"Social Share Cv App", title: "Social Share Cv App",  icon: 'library_books', class: '',value:"" }
                      );

                          
							          this.menuFeatures.push(
                          { path: '/product/'+ "contactUs"+"/"+"Contact Us", title: "Contact Us",  icon: 'library_books', class: '',value:"" }
                          );
                          this.menuFeatures.push(
                            { path: '/product/'+ "storeLocator"+"/"+"Store Locator", title: "Store Locator",  icon: 'library_books', class: '',value:"" }
                            );
        
                    
							  
    

  }
}
