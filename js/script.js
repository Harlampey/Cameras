//response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

let choosed = $("#nav-glown");

let pl_image = "images/pl.png";
let en_image = "images/en.png";
let de_image = "images/de.png";






function HideSubCategory(key) {
    $("#" + key + "-section").addClass("subcategory-section-deactive");
    $("#" + key + "-section img").addClass(".subcategory-image-deactive");
    setTimeout(function(){
        $("#" + key + "-section").addClass("d-none");
    },500);
}
function HideSubCategories(){
    $(".subcategory-section").addClass("subcategory-section-deactive");
    $(".subcategory-section img").addClass(".subcategory-image-deactive");
    setTimeout(function(){
        $(".subcategory-section").addClass("d-none");
    },500);
}
function ShowSubCategory(key){
    $("#" + key + "-section").removeClass("d-none");
    setTimeout(function(){
        $("#" + key + "-section").removeClass("subcategory-section-deactive");
        $("#" + key + "-section img").removeClass(".subcategory-image-deactive");
    }, 500);
    
}
$(document).ready(function(){

    $("#menu-ul").slideToggle();

    $(".open-glown").click(function(){
        if (choosed != $("#nav-glown")){
            choosed.removeClass("nav-active");
            $("#nav-glown").addClass("nav-active");
            choosed = $("#nav-glown");
            
        }
        HideSubCategories();
        HideContacts();
        HideAbout();
        HideOffer()
        ShowGlown(); 
        
    });

    $(".open-ofirmie").click(function(){
        if (choosed != $("#nav-ofirmie")){
            choosed.removeClass("nav-active");
            $("#nav-ofirmie").addClass("nav-active");
            choosed = $("#nav-ofirmie");
             
        }
        HideSubCategories();
        HideGlown();
        HideContacts();  
        HideOffer() 
        ShowAbout(); 
    });
    $(".open-oferta").click(function(){
        if (choosed != $("#nav-oferta")){
            choosed.removeClass("nav-active");
            $("#nav-oferta").addClass("nav-active");
            choosed = $("#nav-oferta");
        }
        HideSubCategories();
        HideGlown();
        HideAbout();
        HideContacts();
        ShowOffer(); 
    });

    $(".open-kontakt").click(function(){
        if (choosed != $("#nav-kontakt")){
            choosed.removeClass("nav-active");
            $("#nav-kontakt").addClass("nav-active");
            choosed = $("#nav-kontakt");
        }
        HideSubCategories();
        HideGlown();
        HideAbout();
        HideOffer()
        ShowContacts();
        
    });
    
    function HideGlown(){
        $("#camera-img").addClass("camera-img-deactivated");
        $(".description-point").addClass("description-point-deactivated");
        $("#anim-description").addClass("invisible");
        $("#description-hr").addClass("invisible");
        setTimeout(function(){
            $("#mainSection").delay(500).addClass("d-none");
        }, 500);
    }
    function ShowGlown(){
        $("#mainSection").removeClass("d-none");
        setTimeout(function(){
            $("#camera-img").removeClass("camera-img-deactivated");
            $(".description-point").removeClass("description-point-deactivated");
            $("#anim-description").removeClass("invisible");
            $("#description-hr").removeClass("invisible");
        }, 500);   
        
        
    }
    
    function HideContacts(){
        $("form").addClass("form-deactivated");
        $("#contacts").addClass("contacts-deactivated");
        $("#camera-img-contacts").addClass("camera-img-deactivated");
        setTimeout(function(){
            $("#contactsSection").addClass("d-none");
        }, 500);
        
    }
    function ShowContacts(){
        $("#contactsSection").removeClass("d-none");
        setTimeout(function(){
            $("form").removeClass("form-deactivated");
            $("#contacts").removeClass("contacts-deactivated");
            $("#camera-img-contacts").removeClass("camera-img-deactivated");
        }, 500); 
        
    }

    function HideOffer(){
        $("#offer-list").addClass("invisible");
        $("#offer-image").addClass("image-desactive-left");
        setTimeout(function(){
            $("#offerSection").addClass("d-none");
        }, 500);
    }
    function ShowOffer(){
        $("#offerSection").removeClass("d-none");
        setTimeout(function(){
            $("#offer-list").removeClass("invisible");
            $("#offer-image").removeClass("image-desactive-left");
        }, 500);
    }

    function HideAbout(){
        $("#about-container").addClass("about-container-deactivated");
        $("#deco-left-img").addClass("img-deco-left-deactivated");
            $("#deco-right-img").addClass("img-deco-right-deactivated");
        setTimeout(function(){
            $("#aboutSection").addClass("d-none");
            
        }, 500);
    }
    function ShowAbout() {
        $("#aboutSection").removeClass("d-none");
        setTimeout(function() {
            $("#about-container").removeClass("about-container-deactivated");
            $("#deco-left-img").removeClass("img-deco-left-deactivated");
            $("#deco-right-img").removeClass("img-deco-right-deactivated");
        }, 500);
        
    }


    


    HideContacts();
    HideAbout();
    //HideGlown();
    HideOffer();



    // Localization
    $("#switch-languages-button").data("language", Cookies.get("language_id"));
    $("#switch-languages-button").click(function(){
        if ($("#switch-languages-button").data("language") == 0){
            TranslateToEn();
    
            $("#switch-languages-button").data("language", 1);
            $("#switch-languages-button").attr("src", en_image);
            Cookies.set('language_id', 1);
        }
        else if ($("#switch-languages-button").data("language") == 1){
            TranslateToDe();
    
            $("#switch-languages-button").data("language", 2);
            $("#switch-languages-button").attr("src", de_image);
            Cookies.set('language_id', 2);
        } 
        else if ($("#switch-languages-button").data("language") == 2){
            TranslateToPl();
            $("#switch-languages-button").data("language", 0);
            $("#switch-languages-button").attr("src", pl_image);
            Cookies.set('language_id', 3);
        }
    });
    
    
    function TranslateToPl(){
        $("#navigation-ul li:nth-child(1)").text(home_dictionary.pl);
        $("#navigation-ul li:nth-child(2)").text(about_dictionary.pl);
        $("#navigation-ul li:nth-child(3)").text(offer_dictionary.pl);
        $("#navigation-ul li:nth-child(4)").text(contact_dictionary.pl);
    }
    function TranslateToEn(){
        $("#navigation-ul li:nth-child(1)").text(home_dictionary.en);
        $("#navigation-ul li:nth-child(2)").text(about_dictionary.en);
        $("#navigation-ul li:nth-child(3)").text(offer_dictionary.en);
        $("#navigation-ul li:nth-child(4)").text(contact_dictionary.en);
    }
    function TranslateToDe(){
        $("#navigation-ul li:nth-child(1)").text(home_dictionary.de);
        $("#navigation-ul li:nth-child(2)").text(about_dictionary.de);
        $("#navigation-ul li:nth-child(3)").text(offer_dictionary.de);
        $("#navigation-ul li:nth-child(4)").text(contact_dictionary.de);
    }
    $("#mobile-menu").hide();

    function HideCategories(){
        HideContacts();
        HideAbout();
        HideGlown();
        HideOffer();
    }
    
    
    

    if (Cookies.get('language_id') != undefined){
        if (Cookies.get('language_id') == "0"){
            TranslateToPl();
            $("#switch-languages-button").attr("src", pl_image);
        } else if (Cookies.get('language_id') == "1") {
            TranslateToEn();
            $("#switch-languages-button").attr("src", en_image);
        } else if (Cookies.get('language_id') == "2"){
            TranslateToDe();
            $("#switch-languages-button").attr("src", de_image);
        }
    } else {
        Cookies.set('language_id', "2");
    }
    
    $(window).on("load", function(){
        setTimeout(function(){
            $("#preloader").addClass("preloader-deactive");
        }, 300);
        setTimeout(function(){
            ShowGlown();
        }, 100);
        setTimeout(function(){
            $("#preloader").addClass("d-none");
        }, 600);  
    });
    HideSubCategories();
    function HideSubCategory(key) {
        $("#" + key + "-section").addClass("subcategory-section-deactive");
        $("#" + key + "-section img").addClass(".subcategory-image-deactive");
        setTimeout(function(){
            $("#" + key + "-section").addClass("d-none");
        },500);
    }
    function HideSubCategories(){
        $(".subcategory-section").addClass("subcategory-section-deactive");
        $(".subcategory-section img").addClass(".subcategory-image-deactive");
        setTimeout(function(){
            $(".subcategory-section").addClass("d-none");
        },500);
    }
    function ShowSubCategory(key){
        $("#" + key + "-section").removeClass("d-none");
        $("#" + key + "-section").removeClass("subcategory-section-deactive");
        $("#" + key + "-section img").removeClass(".subcategory-image-deactive");
    }
    $(".subcategory-li").click(function(){
        HideCategories();
        $(".nav-active").removeClass("nav-active");
    });
    $("#ShowElektryczne").click(function(){
        HideCategories();
        $(".nav-active").removeClass("nav-active");
    });
    $(".menu-slide-toggle").click(function(){
        $("#mobile-menu").slideToggle();
    });
    
});





